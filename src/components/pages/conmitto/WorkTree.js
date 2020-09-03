import React from "react";
import {Box} from "@chakra-ui/core";

const WorkTree = () => {
  return (
    <Box textAlign="left" mt={[30, 40, 50, 100]}>
      <h2>What I did</h2>
      <p><li>Assisted with much of the frontend design and implementation</li></p>
      <p><li>Built and/or modified models, views, serializers, and various things in a Django/Postgres API</li></p>
      <p><li>Worked within Redux, including RSAA</li></p>
      <p><li>Designed an internal responsive and composable library, including using HOC wrappers to encapsulate shared structure/logic</li></p>
      <p><li>Designed, forms, item bars, and data tables for many models</li></p>
      <p><li>Created self documenting code using tools like Proptypes, JSdocs, and Cypress testing.</li></p>
      <p><li>Wrote a bulk deleting system for many models</li></p>
      <h2>Libraries / Tools</h2>
      <p><li>Python / Django / Postgres / Postgis</li></p>
      <p><li>React / Redux / Styled Components / SASS</li></p>
      <p><li>Cypress End-to-End testing</li></p>
      <p><li>Docker</li></p>
      <p><a target="_blank" rel="noopener noreferrer" href="https://conmitto.io">Go to Web Site →</a></p>
    </Box>
  );
};

export {WorkTree};
