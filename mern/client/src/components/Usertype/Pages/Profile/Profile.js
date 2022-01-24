import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router";

const Profile = () => {
  const [useData, setUseData] = useState({});

  const navigate = useNavigate();

  const userProfile = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUseData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    userProfile();
  },[]);

  return (
    <>
      <div className=" container profile">

        <div className="profiledata">
          <h2> Basic Information </h2>

          <div className="profileinfo">
            <div className="profilelabelinput">
              <label>
                Name <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Name"
                className ='form-control'
                value={useData.name}
                required
              />
            </div>

            <div className="profilelabelinput">
              <label>
                Email <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Email"
                className ='form-control'
                value={useData.email}
                required
              />
            </div>

            <div className="profilelabelinput">
              <label>
                Phone <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="number"
                placeholder="Your Phone Number"
                className ='form-control'
                value={useData.phone}
                required
              />
            </div>

            <div className="profilelabelinput">
              <label>
                Work <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Profession"
                className ='form-control'
                value={useData.work}
                required
              />
            </div>

            <div className="profilelabelinput">
              <label>
              Province <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Provinance"
                className ='form-control'
                value={useData.provinance}
                required
              />
            </div>

            <div className="profilelabelinput">
              <label>
                City <span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your City"
                className ='form-control'
                value={useData.city}
                required
              />
            </div>
          </div>
          <div className="profilebutton">
            <br />
            <br />
            <input type="submit"  placeholder="Your Name" required />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
