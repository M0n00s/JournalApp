import { TurnedInNot } from "@mui/icons-material";
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Abdel Arocha
          </Typography>
        </Toolbar>
        <Divider />
        {["enero", "febrero", "marzo", "abril"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNot />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={text} />
                <ListItemText secondary={"In aute voluptate"} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
    </Box>
  );
};
