import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Logo from '../../images/pencil-logo.ico';

import "./style.css";

function Nav() {
  function handleLogout() {
    Auth.logout();
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="big"
        >
           <h1 className="title">
            <Link to="/">Tuff Lead</Link>
          </h1>
          <Menu.Item key="1">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/subscriptions">Subscriptions</Link>
          </Menu.Item>
          <Menu.Item key="4" style={{ float: "right" }}>
            <Link to="/ratings">Reviews</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ float: "right", marginLeft: "auto" }}>
              <img src={Logo} alt="Logo" onClick={handleLogout} className='pencil'/>
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="big"
        >
          <h1 className="title">
            <Link to="/">Tuff Lead</Link>
          </h1>
          <Menu.Item key="1">
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }

  return (
    <header>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;