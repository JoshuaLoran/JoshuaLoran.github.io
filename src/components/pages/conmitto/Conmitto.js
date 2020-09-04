import React from "react";
import {Text, Image, Box, Flex} from "@chakra-ui/core";
import {WorkTree} from "../../layout/WorkTree";
import {QuoteBox} from "./QuoteBox";
import {quotes, workTreeData} from "./constants";
import conmottpLogo from "../../../images/conmottpLogo.png";
import ScreenOne from "../../../images/ConmitScreen.png";

const ConmittoPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Image mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "30%"]} src={conmottpLogo}/>
      <Text fontSize={["16px", "24px", "30px", "34px"]}>Conmitto - Maintenance, Repair and Operations (MRO)</Text>
      <Flex w="80%" ml={["2%", "10%", "20%%", "20%"]} mr={["2%", "10%", "20%", "20%"]} wrap="wrap" justify="space-between">
        {quotes.map((quotes, key) => (
          <QuoteBox key={key} quoteOne={quotes.quoteOne} quoteTwo={quotes.quoteTwo} quoteThree={quotes.quoteThree}/>
        ))}
      </Flex>
      <Flex justify="space-evenly" wrap="wrap">
        <Image mt={[15, 20, 35, 80]} size={["100%", "100%", "100%", "40%"]} src={ScreenOne}/>
        <WorkTree {...workTreeData} />
      </Flex>
    </Flex>
  );
};

export {ConmittoPage};
