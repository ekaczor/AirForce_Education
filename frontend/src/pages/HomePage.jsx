/* eslint-disable react/no-unescaped-entities */
import RandomFact from "../components/RandomFact";
import ToolCard from "../components/ToolCard";
import "../style/HomeStyle.css";

const HomePage = () => {
  const playBellSound = () => {
    const audio = new Audio("src/assets/sounds/BicycleBell.mp3");
    audio.play();
  };

  return (
    <div className="Home-container">
      <div>
        <h1 className="Header">AirForce Education</h1>
        <p className="paragraph">
          Explore AirForce Education - a platform crafted to ignite curiosity
          and learning. Click on our daily 'Picture of the Day' for exciting
          adventures, sparking imagination and exploration. We're dedicated to
          creating an engaging learning journey for young minds. <br />
          <br />
        </p>
      </div>

      <div className="all-links">
        <RandomFact />
        <ToolCard
          title="See today's NASA Picture of the Day!"
          description="The Picture of the Day tool in AirForce Education delivers daily
                curated images, captivating learners with visually engaging
                content that sparks curiosity and encourages exploration."
          imagePath="src/assets/PictureOTD.png"
          pagePath="/apod"
          onClick={playBellSound}
        />
      </div>

      <div className="gallery">
        <ToolCard
          title="Saved Image Gallery"
          description="All of your favorites images saved in one place!"
          imagePath="../src/assets/GalleryImage.jpg"
          pagePath={"/saved-images"}
          onClick={playBellSound}
        />
      </div>
    </div>
  );
};

export default HomePage;
