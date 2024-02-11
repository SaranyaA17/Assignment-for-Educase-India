import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="home">
      <container className="home-sec">
        <h1>Welcom to PopX</h1>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,</p>
      </container>
      <div className="home-button">
        <button onClick={()=>navigate('/NewAccount')}>Create Account</button>
        <button onClick={()=>navigate('/Login')}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default Home;
