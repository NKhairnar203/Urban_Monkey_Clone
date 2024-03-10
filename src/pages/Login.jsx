import { useState } from "react";
import "./Login.css";
import ErrorMessage from "../components/Error";


import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-news.png";
const Login = () => {
  const navigate =  useNavigate();
  // const [errors, setErrors] = useState({});
  // const [valid, setValid] = useState(true);
   const [login, setLogin] = useState({
     email: "",
     password: "",
   });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(login.email === loggeduser.email  && login.password === loggeduser.password){
     navigate("/")
     alert("Login Successfully.....")
    }else{
      alert('Invalid Details Please Check!...');
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
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="head">
              <h2>Login</h2>
            </div>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter Email"
                  className="input"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setLogin({ ...login, email: e.target.value });
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
                    setLogin({ ...login, password: e.target.value });
                  }}
                />
              </div>
              <a href="#" className="forgot">
                Forgot Your Password?
              </a>
            </div>
            <button>SIGN IN</button>

            <Link to="/">
              <button className="cancel">CANCEL</button>
            </Link>

            <div className=" account">
              <Link className="forgot" to="/sign-up">
                Already have an account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
