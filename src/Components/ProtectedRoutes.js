import { Children } from "react";
import { Navigate } from "react-router-dom";



function ProtectedRoutes({children}){

    const isLogin=localStorage.getItem('isLogin');
    console.log("isLogin=",isLogin,typeof(isLogin));
    

    return  isLogin=="true" ? children : <Navigate to={'/login'}/> ;

}

export default ProtectedRoutes