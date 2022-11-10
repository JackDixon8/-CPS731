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
  TrackDelivery,
  BrowsePharmacies,
  OrderDetails,
  Checkout,
  CreateAccount,
  UserLinkCreateAccount,
  ConnectPrescribe
} from "./components";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzDCKDZp5lUR_KMs4PO3ixwZ2Ay_JSR0",
  authDomain: "rex-cps731.firebaseapp.com",
  projectId: "rex-cps731",
  storageBucket: "rex-cps731.appspot.com",
  messagingSenderId: "912913915010",
  appId: "1:912913915010:web:c6223bda97e3b51643689b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mapPage" element={<MapsPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/trackDelivery" element={<TrackDelivery />} />
      <Route path="/browsePharmacies" element={<BrowsePharmacies />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/prescribe" element={<Prescribe />} />
      <Route path="/userLink" element={<UserLinkCreateAccount />} />
      <Route path="/connect" element={<ConnectPrescribe />} />
    </Routes>

  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
