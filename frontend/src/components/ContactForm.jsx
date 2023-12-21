import "../style/ContactStyle.css";
const ContactForm = () => {
  return (
    <div className="contactform">
      <h1>Give us some feedback! </h1>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact"
      >
        <input
          type="hidden"
          name="access_key"
          value="cc6b41a5-effd-4c3f-94c3-1fbe8dc32635"
        />
        <label htmlFor="">Name</label>
        <br />

        <input
          type="text"
          required
          className="inputText"
          name="name"
          placeholder="Your name.."
        />
        <br />
        <label htmlFor="">Email:</label>
        <br />

        <input
          type="email"
          required
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
          required
          name="comment"
          placeholder="Let us know what you think about our Website!!"
        />
        <br />
        
          <button id="submitBtn" type="submit">
            Send
          </button>
          <button id="resetBtn" type="reset" >
            Clear
          </button>
 
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
};
export default ContactForm;

