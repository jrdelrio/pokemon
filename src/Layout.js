import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./front/views/Home";
import injectContext from "./front/store/appContext";

const App = () => {

  const basename = process.env.BASENAME || '';

  return (
    <BrowserRouter basename={basename}>
      <Home />
    </BrowserRouter>

  );
}

export default injectContext(App);
