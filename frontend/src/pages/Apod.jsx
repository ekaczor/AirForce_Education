import { useEffect, useState } from "react";


const Apod = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
const [imageData, setImageData] =useState([]);

  const getTodayDate = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    return formattedDate;
  };

  const getImage = async (date) => {
    try {
      const response = await fetch(`http://localhost:8080/api/apod/${date}`);
      if (!response.ok) {
        throw new Error();
      }
      console.log(response);
      let responseData = await response.json();

      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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

    } catch (error) {
      console.error('Error loading images:', error);
      // Handle errors as needed
    }
  };


  const saveImage = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/apod/saveImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: data.hdurl }), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to save image');
      }
  
      console.log('Image saved successfully');
      // Handle success as needed
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  

  useEffect(() => {
    getImage(getTodayDate());
  }, []);
  return (
    <div>
      {loading && <h1>Loading ...</h1>}
      {!loading && (
        <div>
        
          <h1>{data.title}</h1>
          <h1>{data.date}</h1>
          <img src={data?.hdurl ? data.url : data.hdurl} alt={data.title} />
          <p>{data.explanation}</p>
          <button onClick={saveImage}>Save Image</button>
          <button onClick={getAllImages}>See saved images</button>
      
        </div>
      )}
    </div>
  );
};

export default Apod;
