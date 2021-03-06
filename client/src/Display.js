import React,{ useEffect, useState } from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';

const Display = () => {
  const [data,setData]=useState([]);
useEffect( async() => {
  try {
    const res= await axios.get("rating/123456")
    console.log(res);
    setData(res.data)
  } catch (error) {
    console.log(error);
  }
  
}, []);

return (
<div>
  {data.map((d)=>
  {
    
    return (<div class="ui comments">
  <div class="comment">
    <div class="content">
      <a class="author">User</a>
      <div class="metadata">
        <div class="date">2 days ago</div>
        <div class="rating">
          <i class="star icon"></i>
          {d.rating} 
        </div>
      </div>
      <div class="text">
        {d.description}
      </div>
    </div>
  </div>
</div>);
  })}

    </div>
  )
}

export default Display
