import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export const LoginPage = () => {
  const [Loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!Loading);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="colunm"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>
        <form>
          <Grid container>
            <Grid item>
              <TextField
                sx={{ mt: 2 }}
                label="Email"
                type="email"
                placeholder="email@google.com"
                size="small"
                fullWidth
              />
              <TextField
                sx={{ mt: 2 }}
                label="Password"
                type="password"
                placeholder="Password"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item>
                <LoadingButton
                  onClick={handleClick}
                  loading={Loading}
                  variant="outlined"
                  
                >
                  <span>Login</span>
                </LoadingButton>
              </Grid>
              <Grid item>
                <Button size="small" variant="outline">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
