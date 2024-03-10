import React, { useState } from "react";
import "./SignUp.css";
import logo from "../assets/logo-news.png";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/Error";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    localStorage.setItem("user", JSON.stringify(form));
    

    
    if (form.fname === "" || form.fname === null) {
       alert("First Name Required.");
    }
    else if (form.lname === "" || form.lname === null) {
      alert("Last Name Required.");
     
    }
   else if (form.email === "" || form.email === null) {
     alert("Email is Required.");
    }
    else if (form.password === "" || form.password === null) {
     alert("Password is Required.");
    } else if (form.password.length < 6) {
      alert("Password length at least 6 char.");
    }
    else {
      navigate("/login");
    }


  };

  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </nav>
      <div>
        <div className="login-form-container">
          {/* {valid ? (
            <></>
          ) : (
            <span className="">
              <ErrorMessage
                fname={errors.fname}
                lname={errors.lname}
                email={errors.email}
                password={errors.password}
              />
            </span> */}
          {/* )} */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="head">
              <h2>Register</h2>
            </div>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter First Name"
                  className="input"
                  type="text"
                  name="fname"
                  onChange={(e) => {
                    setForm({ ...form, fname: e.target.value });
                  }}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter Last Name"
                  className="input"
                  type="text"
                  name="lname"
                  onChange={(e) => {
                    setForm({ ...form, lname: e.target.value });
                  }}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter Email"
                  className="input"
                  type="text"
                  name="email"
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter Password"
                  className="input"
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>
              <div className="privacy">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </div>
            </div>
            <button>REGISTER</button>
            <Link to="/">
              <button className="cancel">CANCEL</button>
            </Link>
            <div className=" account">
              <Link className="forgot" to="/login">
                New customer? Create your account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
