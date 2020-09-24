import React from "react";
import {Flex, Image, Text} from "@chakra-ui/core";
import {IconList} from "../../layout/Icons/IconList";
import {homeControlIcons} from "./constants";
import homeControlScreen from "../../../images/homecontrol/homeControlScreen.png";
import homeControlHomeScreen from "../../../images/homecontrol/homeControlHomeScreen.png";
import homeControlConnectScreen from "../../../images/homecontrol/homeControlConnectScreen.png"
import {WorkTree} from "../../layout/WorkTree";
import {workTreeData} from "./constants"

const HomeControl = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Home Control System</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>Making devices with things like Arduino and RaspberryPi was my
        first dive into programming and development. While it was simple enough to put together devices/hacks, connecting
        these things to be controlled from anywhere there is internet was  another story. I made this to help new tinkerers
        and makers connect their devices without needing knowledge of anything internet related. I was given special
        recognition for this project for both building example devices and using several technologies we were not taught.</Text>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={homeControlHomeScreen}/>
        <WorkTree iconList={<IconList icons={homeControlIcons}/>} {...workTreeData}/>
      </Flex>
      <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={homeControlScreen}/>
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={homeControlConnectScreen}/>
      </Flex>
    </Flex>
  );
};

export {HomeControl};
