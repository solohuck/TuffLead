import React from 'react';
import { Card, Button } from 'antd';

const subscriptionsList = [
  {
    id: 1,
    name: 'Basic',
    price: 9.99,
    description: 'Includes access to all basic features',
  },
  {
    id: 2,
    name: 'Pro',
    price: 19.99,
    description: 'Includes access to all pro features',
  },
  {
    id: 3,
    name: 'Premium',
    price: 29.99,
    description: 'Includes access to all premium features',
  },
  {
    id: 4,
    name: 'Ultimate',
    price: 49.99,
    description: 'Includes access to all ultimate features',
  },
];

const Subscriptions = () => {
  return (
    <div>
      <h1>subscriptionsList</h1>
      <div className="site-card-wrapper">
        {subscriptionsList.map(subscription => (
          <Card
            key={subscription.id}
            title={subscription.name}
            bordered={false}
            style={{ width: 300, margin: 16 }}
          >
            <p>{subscription.description}</p>
            <h2>${subscription.price}/month</h2>
            <Button type="primary" block>
              Subscribe
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
