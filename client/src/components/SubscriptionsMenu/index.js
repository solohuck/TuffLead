import React from "react";
import { Layout, Space } from 'antd';
const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

function SubscriptionMenu() {
  return (
  <>
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 60]}
  >
    <Layout>
      <Content style={contentStyle}></Content>
    </Layout>
  </Space>

</>
)}

export default SubscriptionMenu;
