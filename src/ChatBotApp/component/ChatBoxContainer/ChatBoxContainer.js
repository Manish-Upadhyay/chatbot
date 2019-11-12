import React, { Component } from "react";
import { connect } from "react-redux";
// import ChatBoxBlock from "./component/ChatBoxBlock";
import ChatBoxBlockAntd from "./ChatBoxBlockAntd";
import { Row, Col } from "antd";

class ChatBoxContainer extends Component {
  render() {
    const { history } = this.props;
    const { allChatBox } = this.props.chatBoxes;
    console.log(this.props);
    return (
      <>
        {/* <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}
        >
          {allChatBox.map((chbx, index) => (
            <ChatBoxBlock key={index} chatBoxContent={chbx} />
          ))}
        </div> */}

        <div style={{ padding: "24px" }}>
          <Row type="flex" gutter={[24, 24]}>
            {allChatBox.map((chbx, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <ChatBoxBlockAntd history={history}>{chbx}</ChatBoxBlockAntd>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ChatBoxContainer);
