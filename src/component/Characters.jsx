import React, { useEffect, useState } from "react";
import { Box, Card, styled, Grid, Typography, Tooltip } from "@mui/material";
import { fetchData } from "./service/api";

//when using html inside styledComponent we use '' and ({}). The peroperties are written in camelCase not lower block
const Image = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});

const Characters = ({ text }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData();
  }, [text]);

  const getData = async () => {
    let response = await fetchData(text);
    console.log(response);
    setCharacters(response.data);
  };
  return (
    <Box sx={{ m: "5px" }}>
      <Grid container spacing={4}>
        {" "}
        {characters.map((character, i) => (
          <Grid item xs={12} md={4} lg={3} key={i}>
            <Card>
              <Tooltip
                title={
                  <Box>
                    <Typography>Name: {character.name}</Typography>
                    <Typography>Character: {character.portrayed}</Typography>
                    <Typography>Nickname: {character.nickname}</Typography>
                    <Typography>Date of Birth: {character.birthday}</Typography>
                    <Typography>Present Status: {character.status}</Typography>
                  </Box>
                }
                arrow
                placement="top"
              >
                <Image src={character.img} alt="img" />
              </Tooltip>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
