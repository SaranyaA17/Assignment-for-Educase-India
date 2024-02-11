import React, { useState } from "react";
import "./signinNew.css";
import { useNavigate } from "react-router-dom";

const SigninNew = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFullName = (e) => {
    setFullName(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleAgency = (e) => {
    setAgency(e.target.value);
    setAgency(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName === "" || phone === "" || password === "" || agency === "") {
      setSubmitted(true);
      setError(true);
      alert("Please fill out all required fields.");
    } else {
      setError(false);
      console.log({
        fullName,
        phone,
        email,
        password,
        company,
        agency,
      });
      alert("Successfully Created.");
      navigate('/Account');
    }
  };

  return (
    <div className="signinNew">
      <div className="signinNew-sec-1">
        <div>
          <h1>Create your PopX account</h1>
        </div>
        <div>
          <div className="form">
            <div className="form-1">
              <label>
                Full Name<sup>*</sup>
              </label>
              <input type="text" onChange={handleFullName} value={fullName} />
            </div>
            <div>
              <label>
                Phone number<sup>*</sup>
              </label>
              <input type="text" onChange={handlePhone} value={phone} />
            </div>
            <div>
              <label>
                Email address<sup>*</sup>
              </label>
              <input type="text" onChange={handleEmail} value={email} />
            </div>
            <div>
              <label>
                Password<sup>*</sup>
              </label>
              <input type="password" onChange={handlePassword} value={password}/>
            </div>
            <div>
              <label>Company name</label>
              <input type="text" onChange={handleCompany} value={company} />
            </div>
          </div>
          <div>
            <label>
              Are you an Agency?<sup>*</sup>
            </label>
            <div className="radio">
              <input type="radio"  name="agency" onChange={handleAgency} value={agency}/>
              <label>Yes</label>
              <input type="radio" name="agency" onChange={handleAgency} value={agency}/>
              <label>No</label>
            </div>
          </div>
        </div>
      </div>
      <div className="signinNew-sec-2">
          <button onClick={handleSubmit}>
          Create Account
        </button>
        {error && <div className="error">Please fill out all required fields.</div>}
        {submitted && !error && <div className="success">Successfully Created.</div>}
      </div>
    </div>
  );
};

export default SigninNew;
