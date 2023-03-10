const { AuthenticationError } = require('apollo-server-express');
const { User, Subscription, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: { 
    subscriptions: async (parent, { name }) => {
      const params = {};

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return Subscription.find(params)
    },
    subscription: async (parent, { id }) => 
      Subscription.findById(id),
  
    user: async (parent, args, context) => {
      if(context.user) {
        const user = await User.findById(context.user.id).populate({
          path: 'orders.subscriptions',
        
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate({
          path: 'orders.subscriptions',
          
        });

        return user.orders.id(id);
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      
      return { token, user };
    },
    addOrder: async (parent, { subscriptions }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order ({ subscriptions });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in')
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in')
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    cancelSubscription: async (parent, { subscriptionId }, context ) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user_id },
          { $pull: { savedBooks: { subscriptionId } } },
          { new: true }
        );

        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;