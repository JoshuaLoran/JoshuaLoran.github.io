import React from "react";
import JoshuaLoranResume from "../../../files/JoshuaLoranResume.pdf";

const Resume = () => {
  return (
    <div>
      <object data={JoshuaLoranResume} type="application/pdf" width="100%" height="1000px">
        <p>Your web browser doesn't have a PDF plugin.
          Instead you can <a href={JoshuaLoranResume}>click here to
            download the PDF file.</a></p>
      </object>
    </div>
  );
};

export {Resume};
