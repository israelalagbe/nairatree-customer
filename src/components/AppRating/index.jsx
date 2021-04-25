import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./index.scss";

function AppRating({ value }) {
  return (
    <div className="appRating">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <div className="mt-1 ml-1">
        <h6>{value} Rating</h6>
      </div>
    </div>
  );
}

export default AppRating;
