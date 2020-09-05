import React from "react";
import {Text, Image, Flex} from "@chakra-ui/core";
import {sylvanBlurb, sylvanIcons, workTreeData} from "./constants";
import {WorkTree} from "../../layout/WorkTree";
import {IconList} from "../../layout/Icons/IconList";
import sylvan from "../../../images/sylvan/sylvan.png";
import sylvanScreen from "../../../images/sylvan/sylvanScreen.png";

const SylvanPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <IconList icons={sylvanIcons}/>
      <Image mb={[20, 40, 70, 80]} size={["50%", "45%", "40%", "30%"]} src={sylvan}/>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text fontSize={["14px", "20px", "26px", "30px"]}>"{sylvanBlurb}"</Text>
      <Flex justify="space-evenly" wrap="wrap">
        <Image border="double" mt={[15, 20, 35, 80]} size={["100%", "100%", "100%", "40%"]} src={sylvanScreen}/>
        <WorkTree {...workTreeData}/>
      </Flex>
    </Flex>
  );
};

export {SylvanPage};
