import React from "react";
import PropTypes from "prop-types";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
  LaptopOutlined,
  ContainerOutlined,
  TeamOutlined,
  UserOutlined,
  ReadOutlined
} from "@ant-design/icons";

const {SubMenu} = Menu;

// Menu component to display navigation
const SideMenu = ({handleMenuClick, collapsed}) => {
  return (
    <Menu
      onClick={handleMenuClick}
      theme={!collapsed && "dark"}
      mode="inline"
      selectable={false}
    >
      <Menu.Item key="about" icon={<UserOutlined />}>
        About Me
        <Link to="/"/>
      </Menu.Item>
      <SubMenu key="professionalProjects" icon={<TeamOutlined />} title="Professional Work">
        <Menu.Item key="conmitto">
          Conmitto
          <Link to="/conmitto"/>
        </Menu.Item>
        <Menu.Item key="sylvan">
          Sylvan Heights
          <Link to="/sylvan"/>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="schoolProjects" icon={<ReadOutlined />} title="School/Fun Projects">
        <Menu.Item key="homeControl">
          Home Control
          <Link to="/homecontrol"/>
        </Menu.Item>
        <Menu.Item key="SocWild">
          Social Wilderness
          <Link to="/socialwilderness"/>
        </Menu.Item>
        <Menu.Item key="farmFrenzy">
          Farm Frenzy
          <Link to="/farmfrenzy"/>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="HomeRig" icon={<LaptopOutlined />}>
        Home Setup
        <Link to="/homesetup"/>
      </Menu.Item>
      <Menu.Item key="resume" icon={<ContainerOutlined />}>
        Resume
        <Link to="/resume"/>
      </Menu.Item>
    </Menu>
  );
};

export {SideMenu};

SideMenu.defaultProps = {
  handleMenuClick: e => console.log(e),
  collapsed: true
};

SideMenu.propTypes = {
  handleMenuClick: PropTypes.func,
  collapsed: PropTypes.bool
};
