import React from 'react'
import Home from './Home'

import {BrowserRouter , Routes, Route} from "react-router-dom";
import Signup from './Signup/Signup';
import Login from './Login/Login';


function App() {
 
  return (
    <>
     
     <BrowserRouter>
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element = {<Home/>}/>

        </Routes>
        </BrowserRouter>
   </>
   
  );
}

export default App;
