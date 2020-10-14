import React from "react";
import {Text, Image, Flex} from "@chakra-ui/core";
import {WorkTree} from "../../common/layout/WorkTree";
import {QuoteBox} from "./QuoteBox";
import {quotes, workTreeData, subHeader} from "./constants";
import conmittoLogo from "../../../assets/images/conmitto/conmittoLogo.png";
import ScreenOne from "../../../assets/images/conmitto/ConmitScreen.png";
import {IconList} from "../../common/Icons/IconList";
import {conmittoIcons} from "./constants";


// Component to layout the Conmitto page content
const ConmittoPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Image mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "30%"]} src={conmittoLogo}/>
      <Text fontSize={["16px", "24px", "30px", "34px"]}>{subHeader}</Text>
      <Flex w="80%" ml={["2%", "10%", "20%%", "20%"]} mr={["2%", "10%", "20%", "20%"]} wrap="wrap" justify="space-between">
        {quotes.map((quotes, key) => (
          <QuoteBox key={key} quoteOne={quotes.quoteOne} quoteTwo={quotes.quoteTwo} quoteThree={quotes.quoteThree}/>
        ))}
      </Flex>
      <Flex w="100%" justify="space-evenly" wrap="wrap">
        <Image mt={[15, 20, 35, 80]} size={["100%", "100%", "100%", "40%"]} src={ScreenOne}/>
        <WorkTree {...workTreeData} iconList={<IconList icons={conmittoIcons}/>}/>
      </Flex>
    </Flex>
  );
};

export {ConmittoPage};
