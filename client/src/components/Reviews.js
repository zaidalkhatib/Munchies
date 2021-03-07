import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ListReview from "./ListReview";
import { toast } from "react-toastify";
toast.configure();
const Reviews = (props) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ review: "", rating: "" });

  const name = props.match.params.id;
  const history = useHistory();
  useEffect(async () => {
    const res = await axios.get(`/reviews/${name}`);
    setData(res.data);
    console.log(res);
  }, []);
  const HomeBackClick = () => {
    history.push("/");
  };
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const error = () => toast("Please Enter Your Review!", { type: "error" });
  const success = () =>
    toast("Your Review Has Been Posted!", { type: "success" });

  const onClick = async (e) => {
    e.preventDefault();
    if (input.review !== "" && input.rating !== "") {
      const res = await axios.post(`/reviews/${name}`, input);
      success();
    } else {
      error();
    }
  };
  return (
    <div>
      <div style={{ paddingTop: "50px" }}>
        <div class="ui sizer vertical segment">
          <div style={{ color: "white" }} class="ui huge header">
            Reviews
          </div>
        </div>
        <ListReview data={data} />
        <form class="ui reply form">
          <div class="field">
            <textarea
              placeholder="Enter Your Review Here"
              onChange={onChange}
              name="review"
              value={input.review}
            ></textarea>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <div class="ui corner labeled input">
              <input
                type="number"
                placeholder="Rating"
                value={input.rating}
                name="rating"
                onChange={onChange}
              />
              <div class="ui corner label">
                <i class="star icon"></i>
              </div>
            </div>
          </div>
          <button onClick={onClick} class="ui blue labeled submit icon button">
            <i class="icon edit"></i> Add Reply
          </button>
        </form>
        <button
          onClick={HomeBackClick}
          style={{ marginTop: "20px" }}
          class="ui red button"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default Reviews;
