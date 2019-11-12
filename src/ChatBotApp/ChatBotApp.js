import React from "react";
import ChatBoxContainer from "./component/ChatBoxContainer/ChatBoxContainer";
import CommonChatView from "./component/OpenChatViews/CommonChatView";

import { Switch, Route } from "react-router-dom";

const ChatBotApp = () => {
  return (
    <Switch>
      <Route path="/messenger" component={CommonChatView} />
      <Route path="/" component={ChatBoxContainer} />
    </Switch>
  );
};

export default ChatBotApp;
