import React from 'react'
import "./SignUp.css";
import HeadingComp from "./HeadingComp";
const SignIn = () => {
  return (
    <div>
      <div className="signup">
      <div className="container">
        <div className="row">
        <div className="col-lg-4 d-flex justify-content-center align-items-center column col-left">
            <HeadingComp first="Sign" Second="In"/>
          </div>
          <div className="col-lg-8  column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column  w-100 p-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 my-3 input-signup"
                name="email"
              />
        
              <input
                type="password"
                placeholder="Enter Your Password"
                className="p-2 my-3"
                name="password"
              />
              <button className="btn-signup p-2">Sign In</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn
