import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { fetchData } from "./service/api";

const Characters = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetchData();
    console.log(response);
  };
  return (
    <Box>
      <h1>Characters</h1>
    </Box>
  );
};

export default Characters;
