import React, { useState, useEffect } from "react";
import "./ContactUS.css";

function ContactUs() {
  const [useData, setUseData] = useState({name:"", email:"", phone:"", message:""});

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      
      setUseData({ ...useData, name:data.name, email:data.email, phone:data.phone });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  },[]);


  // we are storing data in states

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUseData({...useData, [name]:value });

  }

  const conatctForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message} = useData;

    const res = await fetch('/contact' , {
      method : 'POST',
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name:name, email:email, phone:phone, message:message
      })
    });

    const data = await res.json();

    if(!data){
      console.log('message not send');
    } else {
      alert('Message Send');
      setUseData({...useData, message : ''});
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {/* Phone Number */}
          <div className="col-lg-4">
            <div className="card card-margin card_style">
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <i className="zmdi zmdi-smartphone-info zmdi-hc-2x"></i>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">Phone</span>
                      <span className="widget-49-meeting-time">
                        +921239229981
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div className="col-lg-4">
            <div className="card card-margin card_style">
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <i className="zmdi zmdi-email zmdi-hc-2x"></i>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">Email</span>
                      <span className="widget-49-meeting-time">
                        Example@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-4">
            <div className="card card-margin card_style">
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <i className="zmdi zmdi-pin zmdi-hc-2x"></i>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">Address</span>
                      <span className="widget-49-meeting-time">
                        Hasilpur Main Street, South punjab, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conatct Us form */}

      <div className="contact_form">
        <div className="conatainer">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form  id="conatct_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="input_field"
                      name = "name"
                      value={useData.name}
                      onChange = {handleInput}
                      placeholder="Your Name"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      name = "email"
                      value={useData.email}
                      onChange = {handleInput}
                      placeholder="Your Email"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name = "phone"
                      value={useData.phone}
                      onChange = {handleInput}
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div className="contact-form-text mt-5">
                    <textarea
                      className="text_field contact_form_message form-control"
                      name = "message"
                      value = {useData.message}
                      onChange = {handleInput}
                      placeholder="Your Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact-form-button">
                    <button
                      type="submit"
                      className="button contact_submit_button form-control"
                      onClick = {conatctForm}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
