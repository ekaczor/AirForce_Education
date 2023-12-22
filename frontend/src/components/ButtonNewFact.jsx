/* eslint-disable react/prop-types */
import "../style/ButtonNewFactStyle.css";
const ButtonNewFact = ({ text, onClick }) => {
  const playBellSound = () => {
    const audio = new Audio("src/assets/sounds/BicycleBell.mp3");
    audio.play();
  };

  return (
    <button
      className="new-fact-btn"
      onClick={() => {
        onClick();
        playBellSound();
      }}
    >
      {text}
    </button>
  );
};

export default ButtonNewFact;
