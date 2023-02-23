import React from 'react';
import { Layout } from 'antd';
import SubscriptionsMenu from '../components/SubscriptionsMenu'

const { Footer } = Layout;

function Home() {
  return (
    <div> 
      <SubscriptionsMenu />
      <Footer />
    </div>
  );
}

export default Home;


