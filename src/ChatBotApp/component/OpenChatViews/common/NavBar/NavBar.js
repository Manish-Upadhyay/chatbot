import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

// import { Layout, Typography, Menu } from "antd";

const NavBar = props => {
  // const { Header } = Layout;
  // const { Title } = Typography;
  console.log("Nav", props);
  return (
    <h3 className="navbar">
      <span>
        <NavLink className="navlink" to="/integrations">
          Integrations >
        </NavLink>
        <span> {props.title}</span>
      </span>
    </h3>
  );
};

export default NavBar;
