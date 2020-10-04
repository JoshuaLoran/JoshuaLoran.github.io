import React from "react";
import {IconList} from "../../layout/Icons/IconList";
import {farmFrenzyIcons, workTreeData} from "./constants";
import {Flex, Image, Text} from "@chakra-ui/core";
import {WorkTree} from "../../layout/WorkTree";
import farmfrenzy from "../../../images/farmfrenzy/farmfrenzy.gif";


const FarmFrenzy = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Text textDecoration="underline" fontSize={["24px", "32px", "48px", "64px"]}>Farm Frenzy</Text>
      <Text fontSize={["14px", "18px", "20px", "28px"]}>We wanted to make a 2 player game.  We decided to keep it simple with tic tac toe,
      but really wanted to make it fun for kids so we brought in a Farm theme.  This was the first time I used websockets and it
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      worked really well. Kids could choose which farm animal represented their "X" or "O"</Text>
      <Flex w="100%" justify="space-evenly" wrap="wrap">
        <Image rounded="25px" mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["100%", "100%", "100%", "40%"]} src={farmfrenzy}/>
        <WorkTree iconList={<IconList icons={farmFrenzyIcons}/>} {...workTreeData}/>
      </Flex>
    </Flex>
  );
};

export {FarmFrenzy};
