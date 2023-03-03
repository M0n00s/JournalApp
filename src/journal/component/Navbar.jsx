import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
