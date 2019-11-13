import React from "react";
import NavBar from "./common/NavBar/NavBar";
import Banner from "./common/Banner/Banner";
import InterigationContainer from "./common/InterigationContainer/InterigationContainer";

import { connect } from "react-redux";

function CommonChatView({ chatBoxDetails }) {
  console.log(chatBoxDetails);
  return (
    <>
      <NavBar title={chatBoxDetails.title} theme="light" />
      <Banner childBoxDetails={chatBoxDetails} />
      <InterigationContainer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const chatBoxDetails = state.chatBoxes.allChatBox.find(
    chbx => chbx.path === ownProps.location.pathname
  );
  console.log(chatBoxDetails);
  return { chatBoxDetails };
};

export default connect(mapStateToProps)(CommonChatView);
