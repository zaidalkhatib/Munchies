import axios from "axios";
import React, { useState } from "react";
import Info from "./Info";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const SeachBar = (props) => {
  const [input, setInput] = useState("");
  // const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const error = () => toast("Please Enter Something!", { type: "error" });
  const onChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  let onClick = async (e) => {
    e.preventDefault();
    if (input !== "") {
      // const res = await axios.get(
      //   `https://api.barcodelookup.com/v2/products?search=${input}&key=dbme21e92s95hb0050jqegagu4u24i`
      // );

      const res = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${input}`,
        {
          headers: {
            "X-Api-Key": "5+ehbiKiDytZkXWjFHpWgw==9r75kNQB8vINze5X",
          },
        }
      );
      setData(res);
      setClicked(true);
    } else {
      error();
    }
  };
  return (
    <div>
      <div class="ui fluid icon input">
        <input
          type="text"
          value={input}
          onChange={onChange}
          placeholder="Enter What You Are Looking For"
          required={true}
        />
        <button style={{ border: "0px", backgroundColor: "white" }}>
          <i onClick={onClick} class="search icon"></i>{" "}
        </button>
      </div>
      {clicked ? (
        <div style={{ marginTop: "20px" }}>
          <Info data={data.data} />
        </div>
      ) : null}
    </div>
  );
};

export default SeachBar;
//5+ehbiKiDytZkXWjFHpWgw==9r75kNQB8vINze5X
