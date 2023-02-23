import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Footer } = Layout;
const { Title } = Typography;

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)', paddingTop: '64px' }}>
      <Title style={{ fontSize: '3rem' }}>Welcome to Tuff Lead!</Title>
    </div>
  );
}

export default Home;

