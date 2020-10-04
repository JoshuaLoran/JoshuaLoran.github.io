import React from "react";
import {Image} from "@chakra-ui/core";

const Picture = ({imgFile, size = ["100%", "100%", "40%", "40%"]}) => {
  return <Image
    border="double"
    rounded="25px"
    mb={[20, 40, 70, 80]}
    mt={[10, 30, 60, 70]}
    size={size}
    src={imgFile}/>;
};

export {Picture};
