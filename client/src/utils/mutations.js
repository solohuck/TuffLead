import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($subscriptions: [ID]!) {
    addOrder(subscriptions: $subscriptions) {
      purchaseDate
      subscriptions {
        _id
        name
        description
        price
      }
    }
  }
`;

export const CANCEL_SUBSCRIPTION = gql`
  mutation cancelSubscription($subscriptions: [ID]!) {
    cancelSubscription(subscriptions: $subscriptions) {
      purchaseDate
      subscriptions {
        _id
        name
        description
        price
      }
    }
  }
`;