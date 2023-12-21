import { useEffect, useState } from "react";

import "../style/ApodStyle.css";
import LoadingSpinner from "../components/LoadingSpinner";

const Apod = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);

    const today = new Date();
    if (newDate > today) {
      // If it is, prevent updating the state and fetching data
      return;
    }
    setCurrentDate(newDate);
    setLoading(true);
    getImage(getFormattedDate(newDate));
  };
  const getFormattedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
      const response = await fetch("http://localhost:8080/api/apod/saveImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: data?.hdurl ? data.url : data.hdurl,
          title: data.title,
        }),
      });
      console.log(data?.hdurl ? data.url : data.hdurl);
      if (!response.ok) {
        throw new Error("Failed to save image");
      }

      console.log("Image saved successfully");
      // Handle success as needed
    } catch (error) {
      console.error("Error saving image:", error);
    }
  };

  useEffect(() => {
    getImage(getFormattedDate(new Date()));
  }, []);

  return (
    <div>
      <div className="Spinner">{loading && <LoadingSpinner />}</div>
      {!loading && (
        <>
          <div>
            <h1>{data.title}</h1>
            <h1>{data.date}</h1>
          </div>
          <div className="image">
            <img
              src={data?.hdurl ? data.url : data.hdurl}
              alt={data.title}
            ></img>
            <p>{data.explanation}</p>
            <button onClick={saveImage}>Save Image</button>
            <button onClick={() => handleDateChange(-1)}>Previous Day</button>
            <button onClick={() => handleDateChange(1)}>Next Day</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Apod;
