import React from "react";
import {Text, Image, Box, Flex} from "@chakra-ui/core";
import {WorkTree} from "./WorkTree";
import {QuoteBox} from "./QuoteBox";
import {quotes} from "./Quotes";
import conmottpLogo from "../../../images/conmottpLogo.png";
import ScreenOne from "../../../images/ScreenOne.png";

const ConmittoPage = () => {
  return (
    <Box>
      <Image mb={[20, 40, 70, 80]} mt={[10, 30, 60, 70]} size={["50%", "45%", "40%", "30%"]} src={conmottpLogo}/>
      <Text fontSize={["16px", "24px", "30px", "34px"]}>Conmitto - Maintenance, Repair and Operations (MRO)</Text>
      <Flex ml={["2%", "10%", "20%%", "20%"]} mr={["2%", "10%", "20%%", "20%"]} wrap="wrap" justify="space-between">
        {quotes.map((quotes, key) => (
          <QuoteBox key={key} quoteOne={quotes.quoteOne} quoteTwo={quotes.quoteTwo} quoteThree={quotes.quoteThree}/>
        ))}
      </Flex>
      <Flex justify="space-around" wrap="wrap">
        <Image mt={[20, 30, 50, 100]} size={["100%", "100%", "100%", "40%"]} src={ScreenOne}/>
        <WorkTree/>
      </Flex>
    </Box>
  );
};

export {ConmittoPage};
