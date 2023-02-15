import { gql } from '@apollo/client';

export const QUERY_SUBSCRIPTIONS = gql`
  query getsubscriptions($category: ID) {
    subscriptions(category: $category) {
      _id
      name
      description
      price
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
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      subscriptions {
        _id
        purchaseDate
        name
        description
        price
        image
        }
      }
    }
  }
`;