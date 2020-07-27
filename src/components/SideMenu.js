import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SnippetsOutlined
} from "@ant-design/icons";

const {SubMenu} = Menu;

const SideMenu = ({handleMenuClick}) => {
  return (
    <Menu onClick={handleMenuClick} theme="dark" mode="inline">
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
      <SubMenu key="schoolProjects" icon={<SnippetsOutlined />} title="School/Fun Projects">
        <Menu.Item key="farmFrenzy">
          Farm Frenzy
          <Link to="/farmfrenzy"/>
        </Menu.Item>
        <Menu.Item key="homeControl">
          Home Control
          <Link to="/homecontrol"/>
        </Menu.Item>
        <Menu.Item key="SocWild">
          Social Wilderness
          <Link to="/socialwilderness"/>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="tech" icon={<PieChartOutlined />} title="Technology">
        <Menu.Item key="front">
          Frontend
          <Link to="/frontend"/>
        </Menu.Item>
        <Menu.Item key="back">
          Backend
          <Link to="/backend"/>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="resume" icon={<FileOutlined />}>
        Resume
        <Link to="/resume"/>
      </Menu.Item>
      <Menu.Item key="about" icon={<UserOutlined />}>
        About Me
        <Link to="/about"/>
      </Menu.Item>
    </Menu>
  );
};

export {SideMenu};
