import React from "react";
import "./Head.css";
import { Layout, Typography } from "antd";

const Head = () => {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header className="container">
      <Title level={3}>Integrations Messenger</Title>
    </Header>
  );
};

export default Head;
