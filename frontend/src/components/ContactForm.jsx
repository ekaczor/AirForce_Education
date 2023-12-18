import React from "react";
import "../style/ContactStyle.css";
const ContactForm = () => {
  return (
    <div className="contactform">
      <h1>Give us some feedback! </h1>

      <form action="Feedback">
        <label htmlFor="">Name</label>
        <br />

        <input
          type="text"
          className="inputText"
          name="name"
          placeholder="Your name.."
        />
        <br />
        <label htmlFor="">Email:</label>
        <br />

        <input
          type="email"
          name="mail"
          className="inputText"
          placeholder="Your Email.."
        />
        <br />
        <label htmlFor="">Comment:</label>
        <br />

        <input
          className="comment-input"
          type="text"
          name="comment"
          placeholder="Let us know what you think about our Website!!"
        />
        <br />

        <button id="submitBtn" type="submit">
          Submit
        </button>
        <button id="resetBtn" type="reset">
          Clear
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
