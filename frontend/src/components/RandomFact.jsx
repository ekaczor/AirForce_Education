import { useEffect, useState } from "react";
import Fact from "./Fact";
import ButtonNewFact from "./ButtonNewFact";
import "../style/RandomFactStyle.css";
import LoadingSpinner from "./LoadingSpinner";

const RandomFact = () => {
  let [fact, setFact] = useState(null);
  let [loaded, setLoaded] = useState(false);

  const getFacts = async () => {
    setLoaded(false);
    try {
      const response = await fetch("http://localhost:8080/api/facts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setFact(data[0].fact);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFacts();
  }, []);
  return (
    <div className="random-fact-container">
      {loaded && <Fact fact={fact} />}
      {loaded && (
        <ButtonNewFact
          text="New Fact"
          onClick={() => {
            getFacts();
          }}
        />
      )}
      {!loaded && <LoadingSpinner/>}
    </div>
  );
};

export default RandomFact;
