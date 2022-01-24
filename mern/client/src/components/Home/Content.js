import React from "react";
import pic3 from "./6.png";
import "./Home.css";

function Content() {
  return (
    <>
      <div className="container" id="container">
        <img className="ui large rounded image " src={pic3} alt='This is usersiamge' />
        <div id="container2">
          <p>
            {" "}
            <b>Mission</b>: to provide technology and services to farmers,
            merchants, and farm laborer's to help them expand their business and
            provide them with a wider market. And to import the present farming
            processes and to provide
          </p>
          <p>
            <b>Vission</b> : To provide a helping hand to the farmer and farm
            labourers in improving their lives through thee medium of
            technology. thereby, improving the Agriculture Sector in the
            Pakistan Economy.
          </p>
          <ul>
            <li>'Kissan Dost' is a model farmer management website</li>
            <li>'Kissan Dost' is a model farmer management website</li>
            <li>
              It helps the wholesalers and retailers in buying produce from
              larger number of farmers.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;
