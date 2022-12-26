import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App from "./App";
import JobsPage from "./pages/jobs";
import LoginPage from "./pages/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
