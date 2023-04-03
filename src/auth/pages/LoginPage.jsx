import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Button, Link, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  chekingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const dispatch = useDispatch();
  //disable Buttons
  const { status } = useSelector((state) => state.auth);
  const Loading = useMemo(() => status === "checking", [status]);

  const { password, email, onInputChange } = useForm({
    email: "",
    password: "",
  });
  //Login user
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(chekingAuthentication());

    setLoading(true);
    // console.log({ email, password });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  //login Google
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item>
            <TextField
              sx={{ mt: 2 }}
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            />
            <TextField
              sx={{ mt: 2 }}
              label="Password"
              type="password"
              placeholder="Password"
              size="small"
              name="password"
              value={password}
              onChange={onInputChange}
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
            <Grid item xs={12}>
              <LoadingButton
                sx={{ width: 1 }}
                onClick={onSubmit}
                loading={Loading}
                variant="contained"
              >
                Login
              </LoadingButton>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">or</Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ width: 1 }}
                disabled={Loading}
                onClick={onGoogleSignIn}
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
