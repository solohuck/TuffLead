
import React from 'react';
import { Layout, Typography, Carousel } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const carouselStyle = {
  width: '60%',
  margin: '0 auto',
  height: '300px',
  background: '#f5f5f5',
  borderRadius: '0.5rem',
  padding: '2rem',
};


const SubscriptionMenu = () => {
  const subscriptions = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: ['Access to selected courses', 'Limited content', 'No personalized recommendations'],
    },
    {
      name: 'Gold',
      price: '$19.99/month',
      features: ['Unlimited access to all courses', 'Exclusive content', 'Personalized recommendations'],
    },
    {
      name: 'Platinum',
      price: '$29.99/month',
      features: ['Unlimited access to all courses', 'Exclusive content', 'Personalized recommendations', 'Priority support'],
    },
  ];

  return (
    <Layout>
      <Content>
        <div style={carouselStyle}>
          <Title level={2}>Choose Your Subscription</Title>
          <Carousel dots={true} effect="fade" autoplay>
            {subscriptions.map((subscription, index) => (
              <div key={index}>
                <Title level={3}>{subscription.name} Subscription</Title>
                <p>Price: {subscription.price}</p>
                <p>Features:</p>
                <ul>
                  {subscription.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Carousel>
        </div>
      </Content>
    </Layout>
  );
};

export default SubscriptionMenu;
