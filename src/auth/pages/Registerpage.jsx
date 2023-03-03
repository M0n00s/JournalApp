import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  const [Loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!Loading);
  };
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item>
            <TextField
              sx={{ mt: 2 }}
              label="Nombre Completo"
              type="text"
              placeholder="First Name"
              size="small"
              fullWidth
            />
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
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ mt: 1 }}
            alignItems="center"
          >
            <Grid item xs={12}>
              <LoadingButton
                sx={{ width: 1 }}
                onClick={handleClick}
                loading={Loading}
                variant="contained"
              >
                Create Account
              </LoadingButton>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ fontSize: "0.8em", mt: 1 }}>
              Do you already have an account?
            </Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/login"
              sx={{ fontSize: "0.8em", mt: 1, ml: 1 }}
            >
              Log In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
