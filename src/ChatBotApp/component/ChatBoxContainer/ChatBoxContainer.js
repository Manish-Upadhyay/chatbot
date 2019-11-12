import React, { Component } from "react";
import { connect } from "react-redux";
// import ChatBoxBlock from "./component/ChatBoxBlock";
import ChatBoxBlockAntd from "./ChatBoxBlockAntd";
import { Row, Col, Layout } from "antd";
import SideBar from "./SideBar/SideBar";

class ChatBoxContainer extends Component {
  render() {
    const { allChatBox } = this.props.chatBoxes;
    const { Content } = Layout;
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
        <Layout>
          <SideBar></SideBar>
          <Content>
            <div style={{ padding: "24px" }}>
              <Row type="flex" gutter={[24, 24]}>
                {allChatBox.map((chbx, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6}>
                    <ChatBoxBlockAntd>{chbx}</ChatBoxBlockAntd>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ChatBoxContainer);
