import React from "react";

const MostItems = ({ name, image }) => {
  return (
    <div>
      <div class="ui clearing divider"></div>
      <div class="ui large feed">
        <div class="event">
          <div class="label">
            <img src={image} />
          </div>
          <div class="content">
            <div class="summary">
              <a class="user">{name}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostItems;
