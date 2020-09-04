import React from "react";
import {homepageProps} from "../../../stories/data";
import {Flex, Divider, Box, Text} from "@chakra-ui/core";
import {IconList} from "../../layout/Icons/IconList";
import {sylvanIcons, conmittoIcons, homeControlIcons, socialWildernessIcons} from "../../layout/Icons/constants";

const HomeDash = () => {
  const {pageTitle, firstBlurb} = homepageProps;

  return (
    <Flex direction="column" alignItems="center">
      <Flex bg="#ffffff" align="center" justify="space-around">
        <Text>{pageTitle}</Text>
      </Flex>
      <Divider w="100%" />
      <Box mt="20px">
        <Text>{firstBlurb}</Text>
      </Box>
      <IconList icons={sylvanIcons}/>
      <IconList icons={conmittoIcons}/>
      <IconList icons={homeControlIcons}/>
      <IconList icons={socialWildernessIcons}/>
    </Flex>
  );
};

export {HomeDash};
