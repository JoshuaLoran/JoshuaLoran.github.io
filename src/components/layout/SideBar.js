import React, {useState} from "react";
import {Layout, Avatar, Affix} from "antd";
import ProfilePic from "../../images/ProfilePic.jpeg";
import {SideMenu} from "./SideMenu";
import {motion} from "framer-motion";
import {ParticleBG} from "../particles/ParticleBG";

const {Sider} = Layout;

const variants = {
  small: {scale: 1, marginBottom: "10%"},
  big: {scale: 2.25, marginBottom: "65%"}
};

const SideBar = ({isMobile}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: 1000
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}>
      <Affix>
        <motion.div
          className="logo"
          animate={collapsed ? "small" : "big"}
          transition={{duration: .5}}
          variants={variants}>
          <Avatar style={{marginTop: "20%", zIndex: 1000}} size={50} src={ProfilePic}/>
        </motion.div>
        <div style={{position: "relative", zIndex: 10}}>
          <SideMenu collapsed={collapsed}/>
        </div>
      </Affix>
      {collapsed && <ParticleBG/>}
    </Sider>
  );
};

export {SideBar};
