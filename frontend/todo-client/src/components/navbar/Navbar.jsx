import React from 'react'
import "./Navbar.css";
import {Link } from "react-router-dom";
import { RiContactsBook2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="#"> <b><RiContactsBook2Line /> &nbsp; Todo</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active my-2" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item my-2">
          <Link className="nav-link active" aria-current="pLinkge" to="/about">About us</Link>
        </li>
       
        <li className="nav-item my-2 mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signup">SignUp</Link>
        </li>

        <li className="nav-item my-2 mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signin">SignIn</Link>
        </li>

        <li className="nav-item my-2 mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="/logout">Logout</Link>
        </li>

        <li className="nav-item my-2">
          <Link className="nav-link active" aria-current="page" to="#">
            <img  className="img-fluid user-png" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
          </Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>  
    </div>
  )
}

export default Navbar
