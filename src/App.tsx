import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RoutesList } from "./modules/root/store/routes";
import { Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Link
          to={RoutesList.MARKET_DATA}
        >
          Go To Market Datadashboard
        </Link>
      </header>
    </div>
  );
}

export default App;
