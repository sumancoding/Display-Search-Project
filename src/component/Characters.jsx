import React, { useEffect, useState } from "react";
import { Box, Card, styled, Grid } from "@mui/material";
import { fetchData } from "./service/api";

//when using html inside styledComponent we use '' and ({}). The peroperties are written in camelCase not lower block
const Image = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetchData();
    console.log(response);
    setCharacters(response.data);
  };
  return (
    <Box sx={{ m: "5px" }}>
      <Grid container spacing={4}>
        {" "}
        {characters.map((character) => (
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <Image src={character.img} alt="img" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
