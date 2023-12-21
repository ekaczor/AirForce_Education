import  { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import "../style/ApodStyle.css";

const GalleryPage = () => {
  const [savedImages, setSavedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedImages = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/apod/getall");
        if (!response.ok) {
          throw new Error("Failed to fetch saved images");
        }

        const savedImagesData = await response.json();
        setSavedImages(savedImagesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching saved images:", error);
      }
    };

    fetchSavedImages();
  }, []);

  return (
    <div>
      <div className="Spinner">{loading && <LoadingSpinner />}</div>
      {!loading && (
        <div className="saved image container">
          {savedImages.length === 0 ? (
            <p>No saved images found.</p>
          ) : (
            <div>
              {savedImages.map((image) => (
                <div key={image._id} className="card">
                  <img
                    src={image.imageUrl.slice(1, -1)}
                    alt={image.title}
                    className="image"
                  />

                  <p>{image.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
