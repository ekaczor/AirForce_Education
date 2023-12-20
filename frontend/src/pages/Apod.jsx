import { useEffect, useState } from "react";
import "../style/ApodStyle.css";

const Apod = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);

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
        <div className="title">
          <h1 >{data.title}</h1>
          <h1>{data.date}</h1>
          </div>
          <div className="image">
          <img src={data?.hdurl ? data.url : data.hdurl} alt={data.title} />
          </div>
          <div className="save-button">
          <button onClick={saveImage} className="button">
          <div>
          <img src="src/assets/Star.png" alt="Star Image Save Button" /> 
          </div>
          Save Image
          </button>
          </div>
          
          <p className="explanation">{data.explanation}</p>
          
        </div>
      )}
    </div>
  );
};

export default Apod;
