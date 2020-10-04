import React, {useState, useEffect} from "react";
import {Layout} from "antd";
import {SideBar} from "../components/layout/SideBar";
import {Routes} from "./Routes";
import {desktopHeader, mobileHeader} from "../utils/utils";


const {Content, Header} = Layout;

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const Root = () => {
  const [windowSize, setWindowSize] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWindowSize(getWidth());
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const isMobile = windowSize < 480;

  return (
    <Layout style={{minHeight: "100vh"}}>
      <SideBar/>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          <h1 style={{marginLeft: "80px"}}>{isMobile ? mobileHeader : desktopHeader}</h1>
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
