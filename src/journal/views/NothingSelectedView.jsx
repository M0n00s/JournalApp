import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
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
    </Grid>
  );
};
