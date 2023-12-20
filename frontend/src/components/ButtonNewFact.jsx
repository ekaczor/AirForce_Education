/* eslint-disable react/prop-types */
import "../style/ButtonNewFactStyle.css";
const ButtonNewFact = ({ text, onClick }) => {
  return (
    <button className="new-fact-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonNewFact;
