import React,{useState} from 'react'
import { Link } from "react-router-dom"; 
import styles from "./Navbar.module.css";
const Navbar = () => {
    const[show,setshow]=useState(false);
  return (
    <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container">
  
<b  className={styles["navbar-logo"]}>PRINTFC.IN</b>
    <Link to="/Signup"> <button type="button" className="btn btn-primary" id={styles["signupbtn-nav"]}>Signup</button> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
     onClick={() =>setshow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":" "}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#C1">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#C2">How does it work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#C3">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#C4">Connect</a>
       
        </li>
        <Link to="/Login"> <button type="button" className="btn btn-success">Login</button> </Link>
      </ul>
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar