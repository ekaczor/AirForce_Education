import { useEffect, useState } from "react";

import "../style/ApodStyle.css";
import LoadingSpinner from "../components/LoadingSpinner";

const Apod = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [currentDate, setCurrentDate] = useState(new Date());

  const openPopup = () => {
    let popup = document.getElementById("popup");
    if (popup) {
      popup.classList.add("open-popup");
    }
  };

  const closePopup = () => {
    let popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("open-popup");
    }
  };


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

  const playSaveSound = () => {
    const audio = new Audio("src/assets/sounds/Save.mp3");
    audio.play();
  };

  const playButtonSound = () => {
    const audio = new Audio("src/assets/sounds/Pop.mp3");
    audio.play();
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
      openPopup();
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
          <div className="title">
            <h1>{data.title}</h1>
            <h1>{data.date}</h1>
          </div>
          <div className="image">
            <img
              src={data?.hdurl ? data.url : data.hdurl}
              alt={data.title}
            ></img>
            <div className="buttons">
              {/* <SoundButton path="src/assets/sounds/Save.mp3" /> */}

              <button
                onClick={() => {
                  handleDateChange(-1);
                  playButtonSound();
                }}
                className="button"
              >
                &#8592; Previous
              </button>
              <button
                onClick={() => {
                  saveImage();
                  playSaveSound();
                }}
                className="button"
              >
                Save Image
              </button>
              <button
                onClick={() => {
                  handleDateChange(1);
                  playButtonSound();
                }}
                className="button"
              >
                Next &#8594;
              </button>
            </div>
            
            </div>  
            <div className="popup" id="popup">
            <img src="../src/assets/greentick.png" alt="Green tick" />
            <h2>Thank you!</h2>
            <p>Your image has been successfully saved!</p>
            <button type="button" onClick={closePopup}>Ok</button>
            </div>

            <p className="explanation">{data.explanation}</p>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default Apod;
