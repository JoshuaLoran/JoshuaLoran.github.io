import React, {useState, useEffect} from "react";
import {Affix, Layout} from "antd";
import {SideBar} from "../components/common/layout/SideBar";
import {Routes} from "./Routes";

const {Content, Header} = Layout;

// get window width
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

// Root container for base/root layout
const Root = () => {
  // hold window width in state
  const [windowSize, setWindowSize] = useState(getWidth());

  // listener to set windowSize state on component mount and remove/cleanup listener on unmount
  useEffect(() => {
    const resizeListener = () => {
      setWindowSize(getWidth());
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  // Define what mobile is
  const isMobile = windowSize < 480;

  // Change header based on screen size
  const siteHeader = isMobile ? "Joshua Loran's Portfolio" : "Welcome to Joshua Loran's Personal Website";

  return (
    <Layout style={{minHeight: "100vh"}}>
      <SideBar/>
      <Layout className="site-layout">
          <Header className="site-layout-background">
            <h1 style={{marginLeft: "80px"}}>{siteHeader}</h1>
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
