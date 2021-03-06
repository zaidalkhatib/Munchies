import React from "react";
import axios from "axios";
import Display from "./Display";
import Home from "./components/Home";
import Rating from "./components/Rating";
const App = () => {
  return (
    <div
      style={{
        background: "100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "115vh",
        backgroundImage: `url(https://images.unsplash.com/photo-1611250503393-9424f314d265?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2166&q=80)`,
      }}
    >
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default App;
