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
  const [route, setRoute] = useState("about");
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
      <SideBar
        route={route}
        setRoute={setRoute}/>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          <h1>{isMobile ? mobileHeader : desktopHeader}</h1>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}>
          <Routes/>
        </Content>
      </Layout>
    </Layout>
  );
};

export {Root};