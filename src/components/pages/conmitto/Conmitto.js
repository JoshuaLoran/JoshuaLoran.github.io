import React from "react";
import {Text, Image, Box} from "@chakra-ui/core";
import {WorkTree} from "./WorkTree";
import ConmittoFeatures from "../../../images/ConmittoFeatures.png";

const ConmittoPage = () => {
  return (
    <Box h={1000}>
      <Text fontSize={["16px", "24px", "30px", "34px"]}>Conmitto - Maintenance, Repair and Operations (MRO)</Text>
      <Text fontSize={["14px", "16px", "20px", "24px"]}>We help bridge the digital and physical industrial worlds.</Text>
      <Image
        w={["100%", "100%", "100%", "50%"]}
        src={ConmittoFeatures}/>
      <WorkTree/>
    </Box>
  );
};

export {ConmittoPage};
