import React from "react";
import {Flex, Text} from "@chakra-ui/core";
import {IconList} from "../../common/Icons/IconList";
import {WorkTree} from "../../common/layout/WorkTree";
import homeControlScreen from "../../../assets/images/homecontrol/homeControlScreen.png";
import homeControlHomeScreen from "../../../assets/images/homecontrol/homeControlHomeScreen.png";
import homeControlConnectScreen from "../../../assets/images/homecontrol/homeControlConnectScreen.png";
import {workTreeData, homeControlBlurb, homeControlIcons} from "./constants";
import {Picture} from "../../common/layout/Picture";

// Component to layout the Home Control page content
const HomeControl = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Home Control System</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>{homeControlBlurb}</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Picture size={["100%", "100%", "100%", "40%"]} imgFile={homeControlHomeScreen}/>
        <WorkTree iconList={<IconList icons={homeControlIcons}/>} {...workTreeData}/>
      </Flex>
      <Text textDecoration="underline" fontSize={["20px", "24px", "32px", "48px"]}>Screenshots</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-around">
        <Picture imgFile={homeControlScreen}/>
        <Picture imgFile={homeControlConnectScreen}/>
      </Flex>
    </Flex>
  );
};

export {HomeControl};
