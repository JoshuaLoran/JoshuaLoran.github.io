import React from "react";
import {Text, Image, Box, Flex} from "@chakra-ui/core";
import {sylvanBlurb, workTreeData} from "./constants";
import Sylvan from "../../../images/Sylvan.png";
import SylvanScreen from "../../../images/SylvanScreen.png";
import {WorkTree} from "../../layout/WorkTree";

const SylvanPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Image mb={[20, 40, 70, 80]} size={["50%", "45%", "40%", "30%"]} src={Sylvan}/>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text fontSize={["14px", "20px", "26px", "30px"]}>"{sylvanBlurb}"</Text>
      <Flex justify="space-evenly" wrap="wrap">
        <Image border="double" mt={[15, 20, 35, 80]}  size={["100%", "100%", "100%", "40%"]} src={SylvanScreen}/>
        <WorkTree {...workTreeData}/>
      </Flex>
    </Flex>
  );
};

export {SylvanPage};
