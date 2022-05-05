import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import Logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const StyledHeader = styled(AppBar)`
  background: lightblue;
`;

const StyledComponent = styled(Box)`
  background-color: #004d25;
  margin-left: 50px;
  border-radius: 5px;
  position: relative;
`;

const InputBox = styled(InputBase)`
  color: inherit;
  margin: 0 30px;
`;

const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: 3px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 100 }} />
        <StyledComponent>
          <StyledIcon />
          <InputBox placeholder="Search ...." />
        </StyledComponent>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
