import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRoute } from "../journal/router/JournalRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<JournalRoute />} />
      </Routes>
    </>
  );
};
