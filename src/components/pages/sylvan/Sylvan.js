import React from "react";
import {Text, Image, Flex} from "@chakra-ui/core";
import {sylvanBlurb, sylvanIcons, workTreeData} from "./constants";
import {WorkTree} from "../../common/layout/WorkTree";
import {IconList} from "../../common/Icons/IconList";
import sylvan from "../../../files/images/sylvan/sylvan.png";
import sylvanScreen from "../../../files/images/sylvan/sylvanScreen.png";

// Component to layout the Sylvan Heights page content
const SylvanPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Image mb={[20, 40, 70, 80]} size={["50%", "45%", "40%", "30%"]} src={sylvan}/>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text fontSize={["14px", "20px", "26px", "30px"]}>{`"${sylvanBlurb}"`}</Text>
      <Flex w="100%" justify="space-around" wrap="wrap">
        <Image border="double" mt={[15, 20, 35, 80]} size={["100%", "100%", "100%", "40%"]} src={sylvanScreen}/>
        <WorkTree iconList={<IconList icons={sylvanIcons}/>} {...workTreeData}/>
      </Flex>
    </Flex>
  );
};

export {SylvanPage};
