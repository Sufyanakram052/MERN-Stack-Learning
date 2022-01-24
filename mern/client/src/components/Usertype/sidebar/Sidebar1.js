import React from "react";
import "./Sidebar1.css";
import { Link } from "react-router-dom";

function Sidebar1() {
  return (
    <>
      <div className="sidebar12">
        <Link to="/my-dashboard" className="Link">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
  
              Dashboard
            </div>
          </div>
        </Link>

        <Link to="/my-contacts" className="Link">
          <div className="sidebarWrapper">
            <div className="sidebarMenu ">
              My Contacts
            </div>
          </div>
        </Link>

        <Link to="/my-profile" className="Link">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <Person className="sidearIcon" />
              Profile Setting
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar1;
