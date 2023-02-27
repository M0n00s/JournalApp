import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./auth/pages";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </>
  );
};
