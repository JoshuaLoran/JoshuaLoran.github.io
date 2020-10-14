import React from "react";
import {setupBlurb, setupWorktreeData} from "./constants";
import {Text, Flex, Image} from "@chakra-ui/core";
import deskSetup from "../../../assets/images/home/deskSetup.jpg";
import {WorkTree} from "../../common/layout/WorkTree";

const HomeSetup = () => {
  return <Flex direction="column" alignItems="center">
    <Text fontSize={["20px", "30px", "38px", "48px"]}>HOME SETUP</Text>
    <Text fontSize={["16px", "24px", "30px", "34px"]}>{setupBlurb}</Text>
    <Flex w="100%" justify="space-evenly" wrap="wrap">
      <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={deskSetup}/>
      <WorkTree {...setupWorktreeData}/>
    </Flex>
  </Flex>;
};

export {HomeSetup};
