import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  padding: '50px',
};

function Foot() {
  return (
      <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
  );
}

export default Foot;
