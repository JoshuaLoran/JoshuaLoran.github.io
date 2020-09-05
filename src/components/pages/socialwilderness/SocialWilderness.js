import React from "react";
import {IconList} from "../../layout/Icons/IconList";
import {socialWildernessIcons, workTreeData} from "./constants";
import {Flex, Image, Text} from "@chakra-ui/core";
import {WorkTree} from "../../layout/WorkTree";
import socialWildernessScreen from "../../../images/socialwilderness/socialWildernessScreen.png";
import socialWildernessLeoScreen from "../../../images/socialwilderness/socialWildernessLeoScreen.png";
import socialWildernessDestinationScreen from "../../../images/socialwilderness/socialWildernessDestinationScreen.png"

const SocialWilderness = () => {
  return (
    <Flex direction="column" alignItems="center">
      <IconList icons={socialWildernessIcons}/>
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Social Wilderness</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>My partner and I came up with project because we both love the outdoors.
      We also wanted to do something challenging like a social sight.  Users are able to create profiles, trips, and destination reviews,
      as well as rate destinations and follow/be followed by each other.</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "40%"]} src={socialWildernessScreen}/>
        <WorkTree {...workTreeData}/>
      </Flex>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "30%"]} src={socialWildernessLeoScreen}/>
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "30%"]} src={socialWildernessDestinationScreen}/>
      </Flex>
    </Flex>
  );
};

export {SocialWilderness};
