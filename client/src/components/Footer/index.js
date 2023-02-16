import React from "react";
import { Layout, Space } from 'antd';
const { Footer } = Layout;


const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  padding: '100px',
};

function Foot() {
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
      <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </Space>

</>
)}

export default Foot;