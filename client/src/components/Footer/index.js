import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  padding: '100px',
  height: '100px',
};

function Foot() {
  return (
      <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
  );
}

export default Foot;
