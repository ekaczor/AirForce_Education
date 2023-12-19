/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../style/HomeStyle.css";

const ToolCard = ({ title, imagePath, description, pagePath }) => {
  return (
    <div className="tool-link">
      <Link to={pagePath} className="Link-body">
        <div className="tool-card">
          <h2 className="Card-title">{title}</h2>
          <img
            src={imagePath}
            alt=""
            className="POTD-image" /* I would keep the same*/
          />
          <h3 className="Picture-desc">{description}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ToolCard;
