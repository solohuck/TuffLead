import React from 'react';
import { Layout, Typography, Carousel, Rate, Avatar, Card, Row, Col  } from 'antd';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const customerReviews = [ 

  {
    name: '@PencilLover123',
    avatar: [<Avatar src="https://joesch.moe/api/v1/random" />],
    description: [
    <Rate disabled defaultValue={5} /> , 
    "I absolutely love this subscription service! The flavors are amazing and the pencils write so smoothly. I can't wait for my next delivery!"
    ],
  }

];

const Ratings = () => (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Title level={1} style={{ textAlign: 'center', padding: '20px', height: '20vh'}}>
        </Title>
        <Row className='flex'>
          <Carousel> 
          {customerReviews.map((item) => (
            <Card style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={item.avatar}
                title={item.name}
                description={item.description}
              />
            </Card>
          ))}
          </Carousel> 
        </Row>
      </Content>
    </Layout>
);

export default Ratings;
