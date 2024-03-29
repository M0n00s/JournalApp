import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import { Link, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidatros = {
  email: [(value) => value.includes("@"), "the email must have a @"],
  password: [
    (value) => value.length >= 6,
    "passwors must have be more than 6 letters",
  ],
  displayName: [(value) => value.length >= 1, "this field is required"],
};

export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  //disabled button
  const { status } = useSelector((state) => state.auth);
  const Loading = useMemo(() => status === "checking", [status]);
  // form data
  const {
    email,
    password,
    displayName,
    onInputChange,

    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidatros);

  const onRegister = (e) => {
    e.preventDefault();
    setFormSubmited(true);
  };
  return (
    <AuthLayout title="Register">
      <form onSubmit={onRegister}>
        <Grid container>
          <Grid item>
            <TextField
              sx={{ mt: 2 }}
              label="Name"
              type="text"
              placeholder="First Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              size="small"
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
              fullWidth
            />
            <TextField
              sx={{ mt: 2 }}
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
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
                type="submit"
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
