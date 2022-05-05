import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import Logo from "./images/logo.png";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "lightblue" }}>
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 100 }} />
        <Box>
          <InputBase placeholder="Enter Search" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
