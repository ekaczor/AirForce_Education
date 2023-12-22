/* eslint-disable react/prop-types */
const ImageCard = ({ image, onReview, deleteImg, playBoopSound }) => {
  return (
    <div className={"image-card-gallery"}>
      <h1 className="image-title-gallery">{image.title}</h1>
      <img src={image.imageUrl} alt={image.title} className={"image-gallery"} />
      <div className="review-container-gallery">
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
          playBoopSound();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ImageCard;
