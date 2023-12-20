import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageListPage = () => {
  const navigate = useNavigate();
  const [imageData, setImageData] = useState([]);

  const getAllImages = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/apod/getall', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to load images');
      }

      const fetchedImageData = await response.json();
      setImageData(fetchedImageData);

      // Navigate to a new page after successfully loading images
      navigate('/image-list');
    } catch (error) {
      console.error('Error loading images:', error);
      // Handle errors as needed
    }
  };

  useEffect(() => {
    getAllImages();
  }, []); // Run once on component mount

  return (
    <div>
     {imageData.map((image, index) => (
        <img key={index} src={image.imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageListPage;