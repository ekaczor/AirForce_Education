/* eslint-disable react/prop-types */
const ImageCard = ({ id, imageUrl, title, deleteImg, playBoopSound }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <button
        onClick={() => {
          deleteImg(id);
          playBoopSound();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ImageCard;
