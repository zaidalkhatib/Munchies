import React from "react";
import { useHistory } from "react-router";

const Comments = ({ name }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/reviews/${name}`);
  };
  return (
    <div>
      <button onClick={onClick} class="fluid ui blue button">
        Check People Reviews
      </button>
    </div>
  );
};

export default Comments;
