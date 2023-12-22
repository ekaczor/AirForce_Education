/* eslint-disable react/prop-types */
const ImageCard = ({ image, onReview, deleteImg }) => {
  return (
    <div className={"image-card "}>
      <h1 className="image-title">{image.title}</h1>
      <img src={image.imageUrl} alt={image.title} className={"image "} />
      <div className="review-container">
        {[1, 2, 3, 4, 5].map((star) => {
          return <span
            key={star}
            className={star <= image.rating ? "star-selected" : "star"}
            onClick={() => {
              onReview(image, star);
            }}
          >
            ★
          </span>;
        })}
      </div>
      <button
        onClick={() => {
          deleteImg(image.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ImageCard;
