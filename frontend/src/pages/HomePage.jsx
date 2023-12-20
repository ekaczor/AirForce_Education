/* eslint-disable react/no-unescaped-entities */
import "../style/HomeStyle.css";
import ToolCard from "../components/ToolCard";
import RandomFact from "../components/RandomFact";


const HomePage = () => {
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
        <RandomFact/>
        <ToolCard
          title="See today's NASA Picture of the Day!"
          description="The Picture of the Day tool in AirForce Education delivers daily
                curated images, captivating learners with visually engaging
                content that sparks curiosity and encourages exploration."
          imagePath="src/assets/PictureOTD.png"
          pagePath="/apod"
        />
      </div>
    </div>
  );
};

export default HomePage;
