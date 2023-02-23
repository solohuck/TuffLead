import React, { useState, useEffect} from 'react';
import { Col, Layout, Row, Typography, Carousel, } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Image } from 'antd';
import '../Subscription.css';

import baked1 from '../images/Baked1.png';
import baked2 from '../images/Baked2.png';
import baked3 from '../images/Baked3.png';
import baked4 from '../images/Baked4.png';

import savory1 from '../images/Savory1.png';
import savory2 from '../images/Savory2.png';
import savory3 from '../images/Savory3.png';
import savory4 from '../images/Savory4.png';

import comfort1 from '../images/Comfort1.png';
import comfort2 from '../images/Comfort2.png';
import comfort3 from '../images/Comfort3.png';
import comfort4 from '../images/Comfort4.png';

import herb1 from '../images/Herb1.png';
import herb2 from '../images/Herb2.png';
import herb3 from '../images/Herb3.png';
import herb4 from '../images/Herb4.png';

import fruit1 from '../images/Fruit1.png';
import fruit2 from '../images/Fruit2.png';
import fruit3 from '../images/Fruit3.png';
import fruit4 from '../images/Fruit4.png';

import spicy1 from '../images/Spicy1.png';
import spicy2 from '../images/Spicy2.png';
import spicy3 from '../images/Spicy3.png';
import spicy4 from '../images/Spicy4.png';





const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const images = [baked1, baked2, baked3, baked4];
const images_1 = [herb1, herb2, herb3, herb4];
const images_2 = [comfort1, comfort2, comfort3, comfort4];
const images_3 = [spicy1, spicy2, spicy3, spicy4];
const images_4 = [fruit1, fruit2, fruit3, fruit4];
const images_5 = [savory1, savory2, savory3, savory4];




const subscriptionData = [

  {
    name: 'The Herb & Spice Set',
    description: ['Includes pencils in herb and spice-inspired flavors like basil, thyme, and black pepper.'],
    image: [<Carousel>
      {images_1.map((image) => (
        <Image key={image} src={image} alt="Baked" />
      ))}
    </Carousel>],
  },
  {
    name: 'The Baked Good Bunch',
    description: ['Includes pencils in baked good-inspired flavors like donut, cinnamon roll, and muffin.'],
    image: [<Carousel>
      {images.map((image) => (
        <Image key={image} src={image} alt="Baked" />
      ))}
    </Carousel>],
  },
  {
    name: 'The Comfort Food Collection',
    description: ['Includes pencils in food-inspired flavors that are often associated with comfort and nostalgia, such as mac and cheese, grilled cheese, and popcorn.'],
    image: [<Carousel>
      {images_2.map((image) => (
        <Image key={image} src={image} alt="Comfort" />
      ))}
    </Carousel>],
  },
  {
    name: 'The Spicy Selection',
    description: ['Includes pencils in spicy food-inspired flavors like hot sauce, salsa, and jalapeno.'],
    image: [<Carousel>
      {images_3.map((image) => (
        <Image key={image} src={image} alt="Baked" />
      ))}
    </Carousel>],
  },
  {
    name: 'The Fruit Frenzy',
    description: ['Includes pencils in fruity flavors such as lemon, strawberry, and watermelon.'],
    image: [<Carousel>
      {images_4.map((image) => (
        <Image key={image} src={image} alt="Baked" />
      ))}
    </Carousel>],
  },
  {
    name: 'The Savory Sensations',
    description: ['Includes pencils in savory food-inspired flavors like pizza, burger, and fries.'],
    image: [
      <Carousel>
      {images_5.map((image) => (
        <Image key={image} src={image} alt="Savory" />
      ))}
    </Carousel>],
  },
];

const SubscriptionPage = () => {

  return (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Title level={1} style={{ textAlign: 'center', padding: '20px'}}>
          Subscription Options
        </Title>
        <Row>
          {subscriptionData.map((item) => (
            <Col span={8} className='flex'>
          <Card 
            hoverable={ true }
            style={{ width: 300 }}
            cover= {item.image}
            actions={[
          <HeartOutlined key='save'/>,
          <ShoppingCartOutlined key='cart'/>,
          ]}
        >

          <Meta 
            title= {item.name}
            description= {item.description}
          />
          </Card>
          </Col>
          
          ))}
        </Row> 
      </Content>
    </Layout>
  );
};
                
export default SubscriptionPage;