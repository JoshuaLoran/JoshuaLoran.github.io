import React from "react";
import {Box, Flex} from "@chakra-ui/core";
import {Icon} from "@iconify/react";


const IconList = ({icons}) => {
  return (
    <Flex w="80%" wrap="wrap" justify="space-around">
      {icons && icons.map((icon, key) => (
        <Box key={key} m="0.5em">
          <a target="_blank" rel="noopener noreferrer" href={icon.link}>
            <Icon icon={icon.icon} width="1.5em" height="1.5em"/>
          </a>
        </Box>
      ))}
    </Flex>
  );
};

export {IconList};
