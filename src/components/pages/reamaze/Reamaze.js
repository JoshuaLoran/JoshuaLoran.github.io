import React from "react";
import {Text, Flex, Image} from "@chakra-ui/core";
import wordlessLogo from "../../../assets/images/reamaze/wordlessLogo.png";
import multichannel from "../../../assets/images/reamaze/multichannel.webp";
import {Picture} from "../../common/layout/Picture";
import {WorkTree} from "../../common/layout/WorkTree";
import {workTreeData, subHeader, titleDescription, reamazeIcons} from "./constants";
import {Divider} from "antd";
import {IconList} from "../../common/Icons/IconList";

// Component layout for Vennity page content
const Reamaze = () => {
  return <Flex direction="column">
    <Text mb="3%" mt="10px" fontSize={["30px", "40px", "54px", "96px"]}><Image verticalAlign="text-top" h="1em" w="1em" mr=".3em" src={wordlessLogo}></Image>Re:amaze</Text>
    <Text mb="0px" color="rgb(235, 94, 10)" fontSize={["16px", "24px", "30px", "40px"]}>{subHeader}</Text>
    <Text mb="0px" fontSize={["14px", "18px", "22px", "24px"]}>{titleDescription}</Text>
    <Divider style={{marginTop: "5%"}}/>
    <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
      <Picture noBorder={true} imgFile={multichannel}/>
      <WorkTree {...workTreeData} iconList={<IconList icons={reamazeIcons}/>}/>
    </Flex>
  </Flex>;
};

export {Reamaze};