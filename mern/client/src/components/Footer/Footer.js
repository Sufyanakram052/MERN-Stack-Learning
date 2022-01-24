import React from "react";
import { useNavigate } from "react-router";
import "./Footer.css";

function Footer() {

  const navigate = useNavigate();

  const onNavigate = (e) => {
    navigate('/signin');
  }

  return (
    <>
      <div className="footer mt-5" id="footer">
        <div className="kissan-dost">
          <h1>Kissan Dost</h1>
          <br />
          <div className="address">
            <address>
              {" "}
              Hasilpur Main Street,
              <br /> South Punjab,
              <br /> Pakistan
            </address>
          </div>
        </div>
        <div className="useful-links">
          <h1>Useful Links</h1>
          <br />
          <ul>
            <li>Blog</li>
            <li>News</li>
            <li>Alerts</li>
            <li>Farmers Panel</li>
          </ul>
        </div>
        <div className="our-services">
          <h1>Our Services</h1>
          <br />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="user-farmer-login">
          <h1>Users Login</h1>
          <br />
          <div className="conten">
            <p>This Feature is only available for Administration.</p>
          </div>
          <br />
          <input type="button" value="Click Here To Login" onClick = {onNavigate} />
        </div>
      </div>

    </>
  );
}

export default Footer;
