import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  padding: '20px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};

function Foot() {
  return (
      <Footer style={footerStyle}>Tuff Lead ©2023 </Footer>
  );
}

export default Foot;



