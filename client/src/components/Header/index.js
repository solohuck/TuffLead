import React from "react";
import { Layout, Menu  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;



function Head() {
  return (

    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Link to= "/Home">
      <Menu.Item key="1">Home</Menu.Item>
      </Link>
      <Link to="/Profile">
        <Menu.Item key="2">ProfilePage</Menu.Item>
      </Link>
      <Link to="/Subscriptions">
        <Menu.Item key="3">Subscriptions</Menu.Item>
      </Link>
      <Menu.Item key="4" style={{ float: 'right' }}>
        <UserOutlined />
        <a href="/login" style={{ color: 'white', marginLeft: 6 }}>Login</a>
      </Menu.Item>
    </Menu>
  </Header>
)}

export default Head;
