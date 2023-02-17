import React from 'react';
import { Card, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const profileStyle = {
  padding: '2rem',
  borderRadius: '0.5rem',
};

const subscriptionCardStyle = {
  borderRadius: '0.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const ProfilePage = ({ subscribed, cancelSubscription }) => {
  const subscription = {
    name: 'Gold',
    price: '$19.99/month',
    features: ['Unlimited access to all courses', 'Exclusive content', 'Personalized recommendations'],
  };

  return (
    <Layout>
      <Content>
        <div style={profileStyle}>
          {/* add users name instead of 'My Profile' */}
          <Title level={2}>My Profile</Title> 
          {subscribed ? (
            <>
              <Title level={4}>Subscription Information</Title>
              <Card style={subscriptionCardStyle}>
                <Title level={3}>{subscription.name} Subscription</Title>
                <p>Price: {subscription.price}</p>
                <p>Features:</p>
                <ul>
                  {subscription.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button onClick={cancelSubscription}>Cancel Subscription</button>
              </Card>
            </>
          ) : (
            <Title level={4}>No Subscription</Title>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default ProfilePage;
