import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  MapsPage,
  Checkout,
  Validation,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mapPage" element={<MapsPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/validation" element={<Validation />} />
    </Routes>

  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
