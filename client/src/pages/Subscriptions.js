import React from 'react';
import { Card, Col, Layout, Row, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const subscriptionData = [  
  {    
    name: '1',    
    price: '$9.99/month',    
    features: [      
       
    ],
  },
  {
    name: '2',
    price: '$9.99/month',
    features: [
    
    ],
  },
  {
    name: '3',
    price: '$9.99/month',
    features: [
    
    ],
  },
  {
    name: '4',
    price: '$499.99/month',
    features: [
  
    ],
  },
];

const subscriptionCardStyle = {
  borderRadius: '0.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  height: '100%',
};

const SubscriptionPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Title level={2} style={{ textAlign: 'center' }}>
          Subscription Options
        </Title>
        <Row gutter={[32, 32]} justify="space-between" align="middle" style={{ height: '100%' }}>
          <Col span={10}>
            <Card style={subscriptionCardStyle}>
              <Title level={3}>{subscriptionData[0].name} Subscription</Title>
              <p>Price: {subscriptionData[0].price}</p>
              <p>Features:</p>
              <ul>
                {subscriptionData[0].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Subscribe</button>
            </Card>
          </Col>
          <Col span={10}>
            <Card style={subscriptionCardStyle}>
              <Title level={3}>{subscriptionData[1].name} Subscription</Title>
              <p>Price: {subscriptionData[1].price}</p>
              <p>Features:</p>
              <ul>
                {subscriptionData[1].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Subscribe</button>
            </Card>
          </Col>
        </Row>
        <Row gutter={[32, 32]} justify="space-between" align="middle" style={{ height: '100%' }}>
          <Col span={10}>
            <Card style={subscriptionCardStyle}>
              <Title level={3}>{subscriptionData[2].name} Subscription</Title>
              <p>Price: {subscriptionData[2].price}</p>
              <p>Features:</p>
              <ul>
                {subscriptionData[2].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Subscribe</button>
            </Card>
          </Col>
          <Col span={10}>
            <Card style={subscriptionCardStyle}>
              <Title level={3}>{subscriptionData[3].name} Subscription</Title>
              <p>Price: {subscriptionData[3].price}</p>
              <p>Features:</p>
              <ul>
                {subscriptionData[3].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Subscribe</button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default SubscriptionPage;
          



















