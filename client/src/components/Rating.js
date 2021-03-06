import axios from 'axios';
import React, { useState } from 'react'


const Rating = () => {
  const [data, setData] = useState({description:"",rating:"",barCode:""});
  
  const onChange= (e)=>
  {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const onSubmit= (e)=>
  {
    e.preventDefault();    
    axios.post("/rating",data);
  }
  return (
    <div>
    <form className="row " onSubmit={onSubmit}>
    <div className="row-auto m-3">
    <input type="text" onChange={onChange}  value={data.barCode} name="barCode" className="form-control" id="inputPassword2" placeholder="Enter BarCode" />
  </div>
  <div className="row-auto m-3">

    <input className="form-control form-control-lg" onChange={onChange} value={data.description} type="text"  placeholder="Enter Description" name="description"  />
  </div>
  <div className="row-auto m-3">
    <input type="text" onChange={onChange}  value={data.rating} name="rating" className="form-control" id="inputPassword2" placeholder="Enter Rting" />
  </div>
  <div className="col-auto m-3">
    <button type="submit" className="btn btn-primary mb-3">Rate</button>
  </div>
</form>
    </div>
  )
}

export default Rating
