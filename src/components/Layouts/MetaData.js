import { capitalize } from "@mui/material";
import React from "react";
import Helmet from "react-helmet";
const MetaData = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} -- Online Store`}</title>
      </Helmet>
    </>
  );
};

export default MetaData;
