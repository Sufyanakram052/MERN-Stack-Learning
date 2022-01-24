import React, { useState, useEffect } from "react";
import picss from "../../../login/b.jpg";
import "./Card.css";
import { useNavigate } from "react-router";

const Card = () => {
  const [useData, setUseData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();


   // Get users
   
  const alluser = async () => {
    try {
      const res = await fetch("/getusers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUseData(data);

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
    alluser();
  },[]);

 

  // Search

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = useData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(useData);
    }
  };

  return (
    <>
      <div className="searchbar">
        <input
          className="searchresult form-control"
          type="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />

        <div id="cardlist">
          {searchInput.length > 1 ? (
          filteredResults.map((result) => {
            return (
              <div className="card maincard">
                <img className=" ui centered image circleimage" src={picss} alt ='This is cardImag' />
                <h5 className="uname">{result.name}</h5>
                <hr />
                <div className="content getdata0">
                  <div className="getdata1">
                    <lable> Email </lable>
                    <lable> Type </lable>
                    <lable> District </lable>
                    <lable> City </lable>
                  </div>
                  <div className="getdata2">
                    <lable key={result.id}>{result.email}</lable>
                    <lable> {result.work} </lable>
                    <lable> {result.provinance} </lable>
                    <lable> {result.city} </lable>
                  </div>
                </div>
                <div className="foruchat">
                  <a href="####">Chat</a>
                </div>
              </div>
            );
          }) ) : useData.map((result) => {
            return (
              <div className="card maincard">
                <img className=" ui centered image circleimage" src={picss} alt='this is cardimage' />
                <h5 className="uname">{result.name}</h5>
                <hr />
                <div className="content getdata0">
                  <div className="getdata1">
                    <lable> Email </lable>
                    <lable> Type </lable>
                    <lable> District </lable>
                    <lable> City </lable>
                  </div>
                  <div className="getdata2">
                    <lable key={result.id}>{result.email}</lable>
                    <lable> {result.work} </lable>
                    <lable> {result.provinance} </lable>
                    <lable> {result.city} </lable>
                  </div>
                </div>
                <div className="foruchat">
                  <a href="#####">Chat</a>
                </div>
              </div>
            );
          }) }
        </div>
      </div>
    </>
  );
};

export default Card;
