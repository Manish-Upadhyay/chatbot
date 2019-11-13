import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import "./SideBar.css";

import { NavLink } from "react-router-dom";

export class SideBar extends Component {
  render() {
    const { Sider } = Layout;
    return (
      <Sider collapsed>
        {/* <Menu theme="dark" mode="inline">
          <Menu.Item key="0"></Menu.Item>
          <Menu.Item key="1">
            <Icon type="dot-chart" />
            <NavLink to="/integrations">Integrations</NavLink>
          </Menu.Item>
        </Menu> */}
        <div>
          <div className="menu-desktop-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.55 16.89">
              <polyline
                points="42.69 4.47 35.79 12.18 29.59 4.47 23.29 12.28 16.39 4.58 10.69 12.28 3.29 4.88"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: "10",
                  strokeWidth: "3px",
                  width: "20px"
                }}
              ></polyline>
            </svg>
          </div>
          <div className="menu-item">
            <NavLink to="/integrations">
              <Icon type="dot-chart" />
            </NavLink>
          </div>
        </div>
      </Sider>
    );
  }
}

export default SideBar;
