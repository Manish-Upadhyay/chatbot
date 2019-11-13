import React from "react";
import ChatBoxContainer from "./component/ChatBoxContainer/ChatBoxContainer";
import CommonChatView from "./component/OpenChatViews/CommonChatView";
import SideBar from "./component/SideBar/SideBar";

import { Switch, Route } from "react-router-dom";

import { Layout } from "antd";

const ChatBotApp = () => {
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className="sidebar-container">
        <SideBar />
        <Layout
          className="layout-container"
          style={{ marginLeft: 0, backgroundColor: "#fff", minWidth: "300px" }}
        >
          <Content style={{ backgroundColor: "#fff" }}>
            <Switch>
              <Route path="/integrations/widget" component={CommonChatView} />
              <Route path="/integrations/livechat" component={CommonChatView} />
              <Route path="/integrations/webhook" component={CommonChatView} />
              <Route path="/integrations/slack" component={CommonChatView} />
              <Route
                path="/integrations/messenger"
                component={CommonChatView}
              />

              <Route path="/integrations" component={ChatBoxContainer} />
              <Route path="/" component={ChatBoxContainer} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default ChatBotApp;
