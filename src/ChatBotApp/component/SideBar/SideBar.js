import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import { NavLink } from "react-router-dom";

export class SideBar extends Component {
  render() {
    const { Sider } = Layout;
    return (
      <Sider
        collapsed
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="dot-chart" />
            <NavLink to="/integrations">Integrations</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
