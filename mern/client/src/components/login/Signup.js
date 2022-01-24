import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/1.png";
import "./Login.css";


function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    provinance: "",
    city: "",
    password: "",
    cpassword: "",
  });
  



  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
   

    const { name, email, phone, work, provinance, city, password, cpassword } =
      user;
      if(!/^[a-zA-Z ]+$/.test(name)){
        alert('Invalid Name pattern')
        return
      }
      if(!	
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          alert('Invalid Email')
          return
        }
        if(!/^[a-zA-Z ]+$/.test(work)){
          alert('Invalid User Type')
          return
        }
        if(!/^[a-zA-Z ]+$/.test(provinance)){
          alert('Invalid City Provinance')
          return
        }
        if(!/^[a-zA-Z ]+$/.test(city)){
          alert('Invalid City Name')
          return
        }
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        provinance,
        city,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invaild Registration");
      console.log("Invaild Registration");
    } else {
      window.alert("Registration Successfully");
      console.log("Registration Successfull");

      navigate('/signin')
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            {/* This is First Div */}
            <div className="signupimage">
              <figure>
                <img src={logo} alt="logo" />
              </figure>
              <NavLink to="/signin" className="signup-image-link">
                {" "}
                I am already register
              </NavLink>
            </div>

            {/* This is 2nd Div */}
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account zmdi-hc-lg material-icons-name"></i>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Name"
                    required 
                    pattern="[A-Za-z]"
                  />
      
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                    
                  />


                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    list="works"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                  <datalist id="works">
                    <option>Farmer</option>
                    <option>Buyer</option>
                  </datalist>
                </div>

                <div className="form-group">
                  <label htmlFor="provinance">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="provinance"
                    id="provinance"
                    autoComplete="off"
                    value={user.provinance}
                    onChange={handleInputs}
                    list="cars"
                    placeholder="Your Province"
                  />
                  <datalist id="cars">
                    <option>Balochistan</option>
                    <option>Khyber Pakhtunkhwa</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                  </datalist>
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    <i className="zmdi zmdi-home material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="off"
                    value={user.city}
                    onChange={handleInputs}
                    placeholder="Your City"

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
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"
                  />


                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
