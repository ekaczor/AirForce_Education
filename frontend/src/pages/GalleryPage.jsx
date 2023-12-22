import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ImageCard from "../components/ImageCard";
import "../style/GalleryStyle.css";

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

  const playBoopSound = () => {
    const audio = new Audio("src/assets/sounds/Boop.mp3");
    audio.play();
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
  const review = async (img, newRating) => {
    console.log(img, newRating);
    try {
      const response = await fetch(
        "http://localhost:8080/api/apod/updateImage",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: img.id,
            imageUrl: img.imageUrl,
            title: img.title,
            rating: newRating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await fetchSavedImages();
    } catch (error) {
      console.log("Error updating image:", error);
    }
  };

  useEffect(() => {
    fetchSavedImages();
  }, []);

  useEffect(() => {
    console.log(savedImages);
    setLoading(false);
  }, [savedImages]);

  return (
    <div>
      <div className="Spinner">{loading && <LoadingSpinner />}</div>
      {!loading && (
        <div>
          {savedImages.length === 0 ? (
            <p>No saved images found.</p>
          ) : (
            <div className="gallery">
              {savedImages.map((image, index) => (
                <ImageCard
                  key={index}
                  image={image}
                  deleteImg={deleteImg}
                  onReview={(img, newRating) => {
                    review(img, newRating);
                  }}
                  playBoopSound={playBoopSound}
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
