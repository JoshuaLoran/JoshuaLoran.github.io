import React from "react";
import {IconList} from "../../layout/Icons/IconList";
import {farmFrenzyIcons, workTreeData, farmFrenzyBlurb} from "./constants";
import {Flex, Image, Text} from "@chakra-ui/core";
import {WorkTree} from "../../layout/WorkTree";
import farmfrenzy from "../../../images/farmfrenzy/farmfrenzy.gif";



const FarmFrenzy = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Farm Frenzy</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>{farmFrenzyBlurb}</Text>
      <Flex w="100%" justify="space-evenly" wrap="wrap">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={farmfrenzy}/>
        <WorkTree iconList={<IconList icons={farmFrenzyIcons}/>} {...workTreeData}/>
      </Flex>
    </Flex>
  );
};

export {FarmFrenzy};
