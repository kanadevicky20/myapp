import { useLocation, useNavigate } from "react-router-dom"


function CmpOne(){

    const location =useLocation();
    const {username}=location?.state||"user not found";
    const Navigate=useNavigate();

    return(
        <div>
            <h1>Component One</h1>
            <p>hello {username||"user not found"}</p>
            <button onClick={()=>{Navigate('/cmptwo',{state:{username:username}})}}>Click Me</button>
        </div>
    )
}

export default CmpOne;