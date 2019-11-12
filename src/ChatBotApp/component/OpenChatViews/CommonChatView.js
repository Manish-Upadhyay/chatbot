import React from "react";
import Head from "./common/Head/Head";
import Banner from "./common/Banner/Banner";
import Content from "./common/Content/Content";

function CommonChatView() {
  return (
    <>
      <Head theme="light">Head</Head>
      <Banner>Beaner</Banner>
      <Content></Content>
    </>
  );
}

export default CommonChatView;
