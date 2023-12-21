/* eslint-disable react/prop-types */
const ImageCard = ({ id, imageUrl, title, deleteImg }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <button
        onClick={() => {
          deleteImg(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ImageCard;
