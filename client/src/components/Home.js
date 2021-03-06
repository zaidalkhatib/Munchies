import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import MoustUsed from "./MoustUsed";
import ProgressBar from "./ProgressBar";
import SeachBar from "./SeachBar";

const Home = () => {
  const date = new Date();

  return (
    <div>
      <div className="container ">
        <div>
          <h2 style={{ textAlign: "center" }} className="">
            <h1>
              <i class="heart blue icon mt-5"></i>
              Mubchies
              <div class="sub header" style={{ color: "#ffffff" }}>
                Get Nutrition Facts Now Free nutrition data for all the snacks
                and beverages you love.
              </div>
            </h1>
          </h2>
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
