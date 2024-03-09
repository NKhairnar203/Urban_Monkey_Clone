import React, { useState } from "react";
import "./Login.css"
import {

  RiCloseLine,

} from "@remixicon/react";
const Login = () => {
  const [Close, setClose] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toggleLogin = () => {
    setClose(!Close);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Add your login logic here
  };
  return (
    <div>
      {" "}
      <div className="login-form-container">
        <form className="login-form" >
          <div className="close-toggle">
            <h2>Login</h2>
           
          </div>
          <div>
            <div className="input-field">
              <input
                placeholder="Enter Email"
                required=""
                className="input"
                type="text"
              />
            </div>
            <div className="input-field">
              <input
                placeholder="Enter Password"
                required=""
                className="input"
                type="password"
              />
            </div>
            <a href="#" className="forgot">
              Forgot Your Password?
            </a>
          </div>
          <button>Sign In</button>
          <div className=" account">
            <a className="forgot" href="#">
              New customer? Create your account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login