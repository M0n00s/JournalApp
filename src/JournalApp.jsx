import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./auth/pages";
import { AppRouter } from "./router/AppRouter";

export const JournalApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
