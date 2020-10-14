import React from "react";
import {Flex, Divider, Box, Text} from "@chakra-ui/core";
import {homePageContent, homeIcons} from "./constants";
import {IconList} from "../../common/Icons/IconList";

// Component to layout the Conmitto page content
const HomeDash = () => {
  const {pageTitle, firstBlurb, secondBlurb} = homePageContent;

  return (
    <Flex direction="column" alignItems="center">
      <Flex bg="#ffffff" align="center" justify="space-around">
        <Text fontSize={["20px", "30px", "38px", "48px"]}>{pageTitle}</Text>
      </Flex>
      <Divider w="100%" />
      <Box pt="20px" mt="20px">
        <Text fontSize={["16px", "24px", "30px", "34px"]}>{firstBlurb}</Text>
      </Box>
      <Box pt="20px" mt="20px">
        <Text fontSize={["16px", "24px", "30px", "34px"]}>{secondBlurb}</Text>
      </Box>
      <IconList icons={homeIcons}/>
    </Flex>
  );
};

export {HomeDash};
