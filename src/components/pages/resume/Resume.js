import React from "react";
import JoshuaLoranResume from "../../../files/JoshuaLoranResume.pdf";

const Resume = () => {
  return (
    <div>
      <embed src={JoshuaLoranResume} width="100%" height="1000px"/>
    </div>
  );
};

export {Resume};
