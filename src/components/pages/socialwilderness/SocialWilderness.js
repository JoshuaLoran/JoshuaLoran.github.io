import React from "react";
import {IconList} from "../../common/Icons/IconList";
import {socialWildernessIcons, workTreeData, socialWildBlurb} from "./constants";
import {Flex, Text} from "@chakra-ui/core";
import {Picture} from "../../common/layout/Picture";
import {WorkTree} from "../../common/layout/WorkTree";
import socialWildernessScreen from "../../../assets/images/socialwilderness/socialWildernessScreen.png";
import socialWildernessLeoScreen from "../../../assets/images/socialwilderness/socialWildernessLeoScreen.png";
import socialWildernessDestinationScreen from "../../../assets/images/socialwilderness/socialWildernessDestinationScreen.png";

// Component to layout the Social Wilderness page content
const SocialWilderness = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Social Wilderness</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>{socialWildBlurb}</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Picture size={["100%", "100%", "100%", "40%"]} imgFile={socialWildernessScreen}/>
        <WorkTree iconList={<IconList icons={socialWildernessIcons}/>} {...workTreeData}/>
      </Flex>
      <Text textDecoration="underline" fontSize={["20px", "24px", "32px", "48px"]}>Screenshots</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Picture imgFile={socialWildernessLeoScreen}/>
        <Picture imgFile={socialWildernessDestinationScreen}/>
      </Flex>
    </Flex>
  );
};

export {SocialWilderness};
