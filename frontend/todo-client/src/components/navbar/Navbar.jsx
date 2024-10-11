import React from 'react'
import "./Navbar.css"
import { RiContactsBook2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"> <b><RiContactsBook2Line /> &nbsp; Todo</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active my-2" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item my-2">
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
       
        <li className="nav-item my-2 mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">SignUp</a>
        </li>

        <li className="nav-item my-2 mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">SignIn</a>
        </li>

        <li className="nav-item my-2 mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">Logout</a>
        </li>

        <li className="nav-item my-2">
          <a className="nav-link active" aria-current="page" href="#">
            <img  className="img-fluid user-png" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
          </a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>  
    </div>
  )
}

export default Navbar
