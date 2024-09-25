import React from "react";
import "./Contact.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import loc_icon from "../../Assets/location-icon.png";
import white_arrow from "../../Assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            pushpendra639844@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            6398441240
          </li>
          <li>
            <img src={loc_icon} alt="" />
            Sector 151 Jaypee Aman Greater Noida
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label>Enter Your Email</label>
          <input
            type="email"
            name="name"
            placeholder="Enter your Email"
            required
          />
          <label>Write your message here</label>

          <textarea
            name="message"
            row="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
