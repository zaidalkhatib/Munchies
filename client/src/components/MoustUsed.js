import React from "react";
import MostItems from "./MostItems";
import oreo from "../images/oreo.jpg";
import snickers from "../images/snickers.png";
import patch from "../images/p.jpg";

const MoustUsed = () => {
  return (
    <div>
      <div class="ui segment">
        <h2 class="ui  header">Most Searched</h2>
        <MostItems name="Oreo" image={oreo} />
        <MostItems name="Snickers" image={snickers} />
        <MostItems name="Sour Patch Kids" image={patch} />
      </div>
    </div>
  );
};

export default MoustUsed;
