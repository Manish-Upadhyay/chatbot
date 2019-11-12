import React, { Component } from "react";
import { Card, Icon } from "antd";

import "./ChatBoxBlockAntd.css";

export class ChatBoxBlockAntd extends Component {
  render() {
    const { children, history } = this.props;
    const { Meta } = Card;
    console.log(this.props);
    return (
      <div
        onClick={() => {
          history.push(children.path);
        }}
        className="box"
      >
        <Card bordered={false}>
          {children.status && children.status === "installed" ? (
            <div className="installed">
              <Icon type="check" />
              <p>Installed</p>
            </div>
          ) : children.status === "vote" ? (
            <p className="voting">VOTING</p>
          ) : (
            ""
          )}
          <p
            style={(children.icon && children.icon.backgroundStyle) || {}}
            className="img-container"
          >
            {(children.icon && children.icon.img) || ""}
          </p>
          <Meta title={children.title} />
          <p className="about">{children.about}</p>
        </Card>
      </div>
    );
  }
}

export default ChatBoxBlockAntd;
