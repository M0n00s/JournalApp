import { AddOutlined, StarOutline } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 115px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 5,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white", margin: "auto" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="white">
          Select or create an entry
        </Typography>
      </Grid>
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </Grid>
  );
};
