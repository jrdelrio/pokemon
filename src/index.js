import React from "react";
import ReactDOM from "react-dom/client";

import "./front/styles/index.css";

import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";

import AppProvider from "./front/store/appContext.js"; // Import your context provider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
