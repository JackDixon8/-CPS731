import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  Dashboard,
  Register,
  Admin,
  Election,
  CandidateProfile,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Election" element={<Election />} />
      <Route path="/candidateprofile" element={<CandidateProfile />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
