import React, {useEffect} from "react";
import {Layout} from "antd";
import {SideBar} from "../components/common/layout/SideBar";
import {Routes} from "./Routes";
import {useRecoilState, useRecoilValue} from "recoil";
import {windowSize, siteHeader} from "../recoil/atoms";
import {getWidth} from "../components/utils.js";

const {Content, Header} = Layout;

// Root container for base/root layout
const Root = () => {
  const [windowWidth, setWindowWidth] = useRecoilState(windowSize);
  const header = useRecoilValue(siteHeader);

  // update recoil state
  useEffect(() => {
    const resizeListener = () => { setWindowWidth(getWidth()); };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [windowWidth]);

  return (
    <Layout style={{minHeight: "100vh"}}>
      <SideBar/>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <h1>{header}</h1>
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
