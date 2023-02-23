import React, { useState } from 'react';
import { Layout, Carousel, Rate, Avatar, Card, Row, Col, Typography, Form, Input, Button } from 'antd';
import './Review.css';

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const customerReviews = [
  {
    name: '@PencilLover123',
    avatar: [<Avatar src="https://joesch.moe/api/v1/4" />],
    rating: <Rate disabled defaultValue={5} />,
    description:
      "I absolutely love this subscription service! The flavors are amazing and the pencils write so smoothly. I can't wait for my next delivery!",
  },
  {
    name: '@CreativeGenius22',
    avatar: [<Avatar src="https://joesch.moe/api/v1/3" />],
    rating: <Rate disabled defaultValue={4} />,
    description:
      "I'm really impressed with the variety of flavors offered. The bubblegum flavor is my favorite so far. The only reason I'm not giving five stars is because the subscription cost is a little higher than I was hoping.",
  },
  {
    name: '@FoodieWriter',
    avatar: [<Avatar src="https://joesch.moe/api/v1/2" />],
    rating: <Rate disabled defaultValue={5} />,
    description:
      "I've been using these pencils for a few weeks now and they're amazing. The chocolate flavor is so rich and the pencils are great quality. I would definitely recommend this subscription service to anyone who loves to write!",
  },
  {
    name: '@WritingEnthusiast',
    avatar: [<Avatar src="https://joesch.moe/api/v1/1" />],
    rating: <Rate disabled defaultValue={3} />,
    description:
      "The pencils themselves are fine, but I was hoping for a little more variety in the flavors. Also, the subscription cost is a bit steep for what you're getting.",
  },
  {
    name: '@Doodler88',
    avatar: [<Avatar src="https://joesch.moe/api/v1/5" />],
    rating: <Rate disabled defaultValue={2} />,
    description:
      "I have to say, I was pretty underwhelmed by these pencils. The flavor was barely noticeable and the pencils themselves felt cheap and flimsy. Definitely not worth the price.",
  },
  {
    name: '@EcoWarriorArt',
    avatar: [<Avatar src="https://joesch.moe/api/v1/6" />],
    rating: <Rate disabled defaultValue={1} />,
    description:
      "I can't believe how terrible these pencils were. The flavor was disgusting and the pencils themselves were practically unusable. Do not waste your money on this subscription service!",
  },
];

const ReviewForm = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values) => {
    const newReview = {
      name: values.username,
      avatar: [<Avatar src={`https://joesch.moe/api/v1/${Math.floor(Math.random() * 10)}`} />],
      rating: <Rate disabled defaultValue={0} count={5} />,
      description: values.description,
    };
    customerReviews.push(newReview);
    setSubmitted(true);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please enter your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter a description!' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {submitted && (
        <div style={{ color: 'green', fontWeight: 'bold' }}>Thank you for your review!</div>
      )}
    </Form>
  );
};

const Ratings = () => (
  <Layout>
    <Content style={{ padding: '2rem' }}>
      <Title level={1} style={{ textAlign: 'center', padding: '100px' }}>
      Tell Us What You Think!
      </Title>
      <ReviewForm />

      <Title level={1} style={{ textAlign: 'center', padding: '200px'}}>
      </Title>
      <Row style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', margin: '30px'}}>
        {customerReviews.map((item) => (
          <Col span={8} style={{ padding: '20px'}}>
            <Card
              hoverable={true}
              className='card'
              style={{ height: '100%' }}
            >
              <Meta avatar={item.avatar} title={item.name} /> 
              {item.rating}
              <div className="card-description">
                {item.description}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  </Layout>
);

export default Ratings;

