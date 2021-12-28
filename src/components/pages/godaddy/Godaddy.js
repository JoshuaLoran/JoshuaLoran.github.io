import React from "react";
import {Text, Flex, Image} from "@chakra-ui/core";
import godaddyLogo from "../../../assets/images/godaddy/godaddyLogo.png";
import websiteBuilder from "../../../assets/images/godaddy/websiteBuilder.png";
import WAMConstruction from "../../../assets/images/godaddy/WAMConstruction.svg";
import WAMMobile from "../../../assets/images/godaddy/WAMMobile.png";
import WAMFinder from "../../../assets/images/godaddy/WAMFinder.svg";
import {WorkTree} from "../../common/layout/WorkTree";
import {workTreeData, subHeader, titleDescription, reamazeIcons} from "./constants";
import {Divider} from "antd";
import {IconList} from "../../common/Icons/IconList";

// Component layout for Godaddy page content
const Godaddy = () => {
  return <Flex direction="column" alignItems="center">
    <Image mt={[10, 30, 60, 70]} size={["70%", "65%", "60%", "50%"]} src={godaddyLogo}/>
    <Flex w="100%" wrap="wrap" justifyContent="space-evenly" alignItems="center">
      <Image size={["30%", "25%", "20%", "10%"]} src={websiteBuilder}/>
      <Image size={["30%", "25%", "20%", "10%"]} src={WAMConstruction}/>
      <Image size={["30%", "25%", "20%", "10%"]} src={WAMMobile}/>
      <Image size={["30%", "25%", "20%", "10%"]} src={WAMFinder}/>
    </Flex>
    <Text mt={["0em", "1em", "1em", "2em"]} mb={["1em", ".5em", ".25em", "0em"]} color="rgb(235, 94, 10)" fontSize={["16px", "24px", "30px", "40px"]}>{subHeader}</Text>
    <Text mb={[20, 30, 40, 50]} fontSize={["14px", "18px", "22px", "24px"]}>{titleDescription}</Text>
    <Divider style={{marginTop: "5%"}}/>
    <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
      <WorkTree {...workTreeData} iconList={<IconList icons={reamazeIcons}/>}/>
    </Flex>
  </Flex>;
};

export {Godaddy};
