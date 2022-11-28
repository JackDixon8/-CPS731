import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  MapsPage,
  Validation,
  Prescribe,
  Test,
  OrderDetails,
  Checkout,
  CreateAccount,
} from "./components";

function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mapPage" element={<MapsPage />} component={User} />
      <Route path="/test" element={<Test />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/prescribe" element={<Prescribe />} />
    </Routes>

  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
