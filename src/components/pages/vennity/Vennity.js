import React from "react";
import {Text, Flex, Image} from "@chakra-ui/core";
import city from "../../../assets/images/vennity/city.webp";
import iosLogin from "../../../assets/images/vennity/iosLogin.png";
import {Picture} from "../../common/layout/Picture";
import {WorkTree} from "../../common/layout/WorkTree";
import {workTreeData, titleSub, titleDescription, vennityIcons} from "./constants";
import {Divider} from "antd";
import {IconList} from "../../common/Icons/IconList";

// Component layout for Vennity page content
const Vennity = () => {
  return <Flex direction="column">
    <Text mb="3%" mt="10px" fontSize={["30px", "40px", "54px", "96px"]}>Vennity</Text>
    <Text mb="0px" color="rgb(235, 94, 10)" fontSize={["16px", "24px", "30px", "40px"]}>{titleSub}</Text>
    <Text mb="0px" fontSize={["14px", "18px", "22px", "24px"]}>{titleDescription}</Text>
    <Image alt="city" mt="0px" ml="5%" w={["100%", "90%", "90%", "90%"]} src={city}/>
    <Divider style={{marginTop: "5%"}}/>
    <Flex wrap="wrap" direction="row" justifyContent="space-evenly">
      <Picture alt="iosLogin" imgFile={iosLogin}/>
      <WorkTree {...workTreeData} iconList={<IconList icons={vennityIcons}/>}/>
    </Flex>
  </Flex>;
};

export {Vennity};
