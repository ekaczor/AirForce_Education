/* eslint-disable react/prop-types */
import "../style/FactStyle.css";
const Fact = ({ fact }) => {
  return (
    <div className="fact-container">
      <div className="fact-prefix">Did You Know?</div>
      <div className="fact">{fact}</div>
    </div>
  );
};

export default Fact;
