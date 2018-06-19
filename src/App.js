import React from "react";
import "normalize.css";
import "flexboxgrid2";
import Container from "./Container";
import Header from "./Header";
import Canopy from "./Canopy";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = props => (
  <div>
    <Header />
    <Canopy />
  </div>
);
export default App;
