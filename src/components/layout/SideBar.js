import React, {useState} from "react";
import {Layout, Avatar} from "antd";
import ProfilePic from "../../images/ProfilePic.jpeg";
import {SideMenu} from "./SideMenu";
import {motion} from "framer-motion";

const {Sider} = Layout;

const variants = {
  small: {scale: 1, marginBottom: "10%"},
  big: {scale: 2.25, marginBottom: "65%"}
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}>
      <motion.div
        className="logo"
        animate={collapsed ? "small" : "big"}
        transition={{duration: .5}}
        variants={variants}>
        <Avatar style={{marginTop: "20%"}} size={50} src={ProfilePic}/>
      </motion.div>
      <SideMenu/>
    </Sider>
  );
};

export {SideBar};
