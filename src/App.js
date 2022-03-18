import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Nabvar } from "./components";

import "./images/App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Nabvar />
      </div>

      <div className="main"></div>

      <div className="footer"></div>
    </div>
  );
};

export default App;
