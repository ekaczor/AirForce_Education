import { useEffect, useState } from "react";

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
        </div>
      )}
    </div>
  );
};

export default Apod;
