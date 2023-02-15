const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }


type Subscription {
  _id: ID
  name: String
  description: String 
  image: String
  price: Float
}
  

  type Auth {
    token: ID!
    user: User
  }

 

  type Query {
    subscriptions(name:String): [Subscription]
    subscription(_id: ID!): Order
    suuer
  }

  type Order {
    _id: ID 
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
