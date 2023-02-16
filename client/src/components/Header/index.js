import React from "react";
import { Layout, Space } from 'antd';
const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  fontSize: 50,
};


function Head() {
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
      <Header style={headerStyle}>Tuff Lead</Header>
    </Layout>
  </Space>

</>
)}

export default Head;
