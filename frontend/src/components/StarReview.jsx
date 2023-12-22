import { useState } from "react";
import "../style/GalleryStyle.css";

// eslint-disable-next-line react/prop-types
const StarRating = ({ onReview, startRating }) => {
  const [rating, setRating] = useState(startRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onReview(selectedRating);
  };

  return (
    <div>
      <p>Select a star to rate:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star-selected" : "star"}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
