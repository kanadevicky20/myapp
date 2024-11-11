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
     <h1 className="form">Form</h1>
        <div className="form">
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="phone">Phone:</label><br />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                /><br /><br />

                <label htmlFor="address">Address:</label><br />
                <textarea
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea><br /><br />

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Form;