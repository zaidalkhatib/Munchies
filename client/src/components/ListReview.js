import React from "react";

const ListReview = ({ data }) => {
  return (
    <div>
      {data.map((element) => {
        return (
          <div>
            <div
              class="ui comments"
              style={{ marginBottom: "25px", marginTop: "15px" }}
            >
              <div class="comment">
                <div class="content">
                  <a class="author">User</a>
                  <div class="metadata">
                    <div class="date " style={{ color: "#6495ED" }}>
                      Today
                    </div>
                    <div style={{ color: "black" }} class="rating">
                      <i class="star black icon"></i>
                      {element.rating}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                    class="text"
                  >
                    {element.review}
                  </div>
                  <div class="ui clearing divider"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListReview;
