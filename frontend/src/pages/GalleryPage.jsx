import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ImageCard from "../components/ImageCard";
import "../style/ApodStyle.css";

const GalleryPage = () => {
  const [savedImages, setSavedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedImages = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/apod/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch saved images");
      }

      const savedImagesData = await response.json();
      setSavedImages(savedImagesData);
    } catch (error) {
      console.error("Error fetching saved images:", error);
    }
  };

  const deleteImg = (id) => {
    try {
      fetch(`http://localhost:8080/api/apod/deleteImage/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Error, response is: ${response}`);
        }
        fetchSavedImages();
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchSavedImages();
  }, []);

  useEffect(() => {
    console.log(savedImages);
    setLoading(false);
  }, [savedImages]);

  {
    /* <div key={image._id} className="card">
<img
src={image.imageUrl.slice(1, -1)}
alt={image.title}
className="image"
/>

<p>{image.title}</p>
</div> */
  }
  return (
    <div>
      <div className="Spinner">{loading && <LoadingSpinner />}</div>
      {!loading && (
        <div className="saved image container">
          {savedImages.length === 0 ? (
            <p>No saved images found.</p>
          ) : (
            <div>
              {savedImages.map((image, index) => (
                <ImageCard
                  key={index}
                  id={image.id}
                  imageUrl={image.imageUrl}
                  title={image.title}
                  deleteImg={deleteImg}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
