import React from "react";
import "semantic-ui-css/semantic.min.css";

const ProgressBar = ({ data, name, max }) => {
  console.log("data in progress", data);

  return (
    <div>
      <h3>{name}</h3>
      {data} gm
      <progress
        class="ui progress"
        style={{ width: "98%" }}
        value={data}
        max={max}
      >
        32%
      </progress>
    </div>
  );
};

export default ProgressBar;
