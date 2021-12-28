import React, {useEffect} from "react";
import {Layout} from "antd";
import {SideBar} from "../components/common/layout/SideBar";
import {Routes} from "./Routes";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {windowSize, siteHeader} from "../recoil/atoms";
import {getWidth} from "../components/utils/ScreenWidth";

const {Content, Header} = Layout;

// Root container for base/root layout
const Root = () => {
  const setWindowWidth = useSetRecoilState(windowSize);

  // update recoil state
  useEffect(() => {
    const resizeListener = () => { setWindowWidth(getWidth()); };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  return (
    <Layout style={{minHeight: "100vh"}}>
      <SideBar/>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <h1>{useRecoilValue(siteHeader)}</h1>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            marginLeft: "100px",
            marginRight: "20px",
            padding: 24,
            minHeight: 280,
            left: 100
          }}>
          <Routes/>
        </Content>
      </Layout>
    </Layout>
  );
};

export {Root};
