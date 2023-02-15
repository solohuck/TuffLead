const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }


type Subscription {
  _id: ID
  name: String
  description: String 
  image: String
  price: Float
}
  

  type Auth {
    token: ID
    user: User
  }

 

  type Query {
    subscriptions(name:String): [Subscription]
    subscription(_id: ID!): Subscription
    user: User
    order(_id: ID!): Order
  }

  type Order {
    _id: ID 
    purchaseDate: String
    subscriptions: [Subscription]
  }

  type Mutation {
    addUser(
      userName: String! 
      email: String!
      password: String!
      ): Auth
      addOrder(subscriptions: [ID]!): Order
      updateUser(
        userName: String
        email: String
        password: String
      ): User
      updateSubscription(_id: ID!): Subscription
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
