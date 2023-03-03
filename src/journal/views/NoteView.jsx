import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      gap={1}
    >
      <Grid item>
        <Typography fontsize={39} fontWeight="light">
          {" "}
          28 de agosto, 2023{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" startIcon={<SaveOutlined />}>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happened today?"
          minRows={5}
        />
      </Grid>

      {/* Galleria de imagenes */}
    </Grid>
  );
};
