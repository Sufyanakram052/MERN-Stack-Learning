import React, { useState, useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/1.png";
import "./Login.css";

import { UserContext } from '../../App';

 const Signin = () => {
   
  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    if(!	
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        alert('Invalid Email')
        return
      }

    const res = await fetch('/signin', {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();
      
    if(res.status === 400 || !data){
      window.alert('Invalid Credtials');
    }else {
      localStorage.setItem("jwtoken", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      dispatch({type: "USER", payload:data.user});
      window.alert('Login Successfully');
      navigate('/');
    }
  }

  return (
       <>
          <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            {/* This is First Div */}
            <div className="signinimage">
              <figure>
                <img src={logo} alt="logo" />
              </figure>
              <NavLink to="/signup" className="signin-image-link">
                {" "}
                Create an Account
              </NavLink>
            </div>

            {/* This is 2nd Div */}
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form method = 'POST' className="login-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-email zmdi-hc-lg material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick = {loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
       </>
    )
}

export default Signin;
