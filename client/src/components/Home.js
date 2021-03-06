import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import MoustUsed from "./MoustUsed";
import ProgressBar from "./ProgressBar";
import SeachBar from "./SeachBar";

const Home = () => {
  const date = new Date();

  return (
    <div>
      <div className="container">
        <div>
          <h3>
            {`${date.getMonth() + 1}/${date.getUTCDay()}/${date.getFullYear()}`}{" "}
          </h3>
        </div>
        <div></div>
        <div style={{ marginTop: "15px" }}>
          <SeachBar />
        </div>

        <div style={{ marginTop: "10px" }}>
          <MoustUsed />
        </div>
      </div>
    </div>
  );
};

export default Home;
