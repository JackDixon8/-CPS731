import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  MapsPage,
  Test,
  TrackDelivery,
  BrowsePharmacies
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mapPage" element={<MapsPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/trackDelivery" element={<TrackDelivery />} />
      <Route path="/browsePharmacies" element={<BrowsePharmacies />} />
    

    </Routes>

  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
