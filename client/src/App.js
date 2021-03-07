import React from "react";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import Home from "./components/Home";

import Reviews from "./components/Reviews";
const App = () => {
  return (
    <div
      style={{
        background: "100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "125vh",
        backgroundImage: `url(https://images.unsplash.com/photo-1611250503393-9424f314d265?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2166&q=80)`,
      }}
    >
      <div className="container">
        <Browser>
          <Route path="/" exact component={Home} />

          <Route
            path="/reviews/:id"
            render={(props) => <Reviews exact {...props} />}
          />
        </Browser>
      </div>
    </div>
  );
};

export default App;
