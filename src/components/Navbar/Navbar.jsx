import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onMenuOpen }) => {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography>Invoice Dash</Typography>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
