import { useState } from "react";
import axios from "axios";

function Form(){

    const [data, setData]=useState({name:'',email:'',phone:'',address:''});

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }

   async function handleSubmit(){
        console.log('data-',data);
       const response= await axios.post("/save",data)
         
    }

    return(<>
      <h1>Form</h1>
        <div className="container">
            <label>Name:</label>
            <input type="text" name="name" value={data.name} onChange={handleChange}/><br/>
            <label>Email:</label>
            <input type="email" name="email" value={data.email} onChange={handleChange}/><br/>
            <label>Phone:</label>
            <input type="number" name="phone" value={data.phone} onChange={handleChange}/><br/>
            <label>Address:</label>
            <input type="text" name="address" value={data.address} onChange={handleChange}/><br/>
            <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
        </div>
        </>
    )
}

export default Form;