import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import './style.css';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/orderHistory">Order History</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Menu.Item>
          <Menu.Item key="3" style={{ float: "right" }}>
            <ShoppingCartOutlined />
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} className="big">
          <h1 className="title">
            <Link to="/">Tuff Lead</Link>
          </h1>
          <Menu.Item key="1">
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ float: "right" }} className="cart">
            <ShoppingCartOutlined />
          </Menu.Item>
        </Menu>
      );
    }
  }

  return (
    <header>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
