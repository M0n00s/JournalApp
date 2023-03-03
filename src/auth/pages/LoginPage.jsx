import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const [Loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!Loading);
  };
  return (
    <AuthLayout title="Login">
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
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/register"
              sx={{ fontSize: "0.8em", mt: 1 }}
            >
              Forgot password
            </Link>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ mt: 1 }}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <LoadingButton
                sx={{ width: 1 }}
                onClick={handleClick}
                loading={Loading}
                variant="contained"
              >
                Login
              </LoadingButton>
            </Grid>
            <Grid item xs={12} md={7}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ width: 1 }}
              >
                <Typography noWrap>Iniciar con Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/register"
              sx={{ fontSize: "0.8em", mt: 1 }}
            >
              create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
