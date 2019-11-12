import React from "react";
import "./ChatBoxBlock.css";

const ChatBoxBlock = ({ chatBoxContent }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="block">
          <div
            style={
              (chatBoxContent.icon && chatBoxContent.icon.backgroundStyle) || {}
            }
            className="img-container"
          >
            {(chatBoxContent.icon && chatBoxContent.icon.img) || ""}
          </div>
          <div className="title">{chatBoxContent.title}</div>
          <div className="about">{chatBoxContent.about}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxBlock;
