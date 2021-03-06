import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Info = ({ data }) => {
  console.log(data.items[0], "dasdsa");
  if (data.items[0] === undefined) {
    return (
      <div>
        <div class="ui message">
          <div class="header">ITEM NOT FOUND</div>
          <p>
            Sorry, we can't find this item. Please try entering something else!
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div class="ui segment">
          <h2 className="container" class="ui  header">
            <h1 style={{ textAlign: "center" }}>{data.items[0].name}</h1>
            MACROS
          </h2>
          <ProgressBar
            data={data.items[0].calories}
            name="Calories"
            max="500"
          />
          <div class="ui clearing divider"></div>

          <ProgressBar
            data={data.items[0].carbohydrates_total_g}
            name="Carbohydrates"
            max="40"
          />
          <div class="ui clearing divider"></div>
          <ProgressBar
            data={data.items[0].cholesterol_mg}
            name="Cholesterol"
            max="30"
          />
          <div class="ui clearing divider"></div>
          <ProgressBar data={data.items[0].fat_total_g} name="Fat" max="30" />
          <div class="ui clearing divider"></div>
          <ProgressBar data={data.items[0].sugar_g} name="Suger" max="100" />
          <button class="fluid ui blue button">Check People Comments</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
