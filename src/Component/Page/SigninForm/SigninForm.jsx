import React from "react";
import './siginform.css'
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate()
  return (
    <div className="siginform">
      <div className="siginform-sec-1">
        <h1>Signin to your PopX account</h1>
      </div>
      <div className="siginform-sec-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className="siginform-sec-3 form">
        <div>
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" placeholder="Enter password" />
        </div>
        <button onClick={()=>navigate('/Account')}>{navigate === 'Account'}Login</button>
      </div>
    </div>
  );
};

export default SigninForm;
