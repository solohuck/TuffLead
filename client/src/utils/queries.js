import { gql } from '@apollo/client';

export const QUERY_SUBSCRIPTIONS = gql`
  query getsubscriptions($category: ID) {
    subscriptions(category: $category) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($subscriptions: [ID]!) {
    checkout(subscriptions: $subscriptions) {
      session
    }
  }
`;

export const QUERY_ALL_SUBSCRIPTIONS = gql`
  {
    subscriptions {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        subscriptions {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;