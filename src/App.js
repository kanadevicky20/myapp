import { useState,React } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Details from './Components/Details';
import Login from './Components/Login';
import ComingSoon from './Components/ComingSoon';
import CmpOne from './Components/cmpOne';
import CmpTwo from './Components/cmpTwo';
import CmpThree from './Components/cmpThree';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Home from './Components/Home';

// // ProtectedRoute Component
// const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
//   return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
// };

function App() {
  // Example of authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (<>
    <Router>     
    <Navbar/>
      <Routes>
        {/* Unprotected Route */}
        <Route path="/" element={<Login/>} />

        <Route path="/login" element={<Login/>} />
        <Route path='/cmpone' element={<CmpOne/>}/>
        <Route path='/cmptwo' element={<CmpTwo/>}/>
        <Route path='/cmpthree' element={<CmpThree/>}/>
       

        {/* Protected Routes */}
        <Route path='/about' element={<ProtectedRoutes><About/></ProtectedRoutes>}/>
        <Route path='/contact' element={<ProtectedRoutes><Contact/></ProtectedRoutes>}/>
        <Route path='/details' element={<ProtectedRoutes><Details/></ProtectedRoutes>}/>
        <Route path='/services' element={<ProtectedRoutes><Services/></ProtectedRoutes>}/>
        <Route path='/form' element={<ProtectedRoutes><Form/></ProtectedRoutes>}/>
      
      </Routes>
    </Router>
    </>
  );
}

export default App;