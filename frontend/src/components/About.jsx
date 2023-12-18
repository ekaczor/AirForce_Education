import "../style/AboutStyle.css";
import image1 from "../assets/github-logo.png"
import image2 from "../assets/linkedin-logo.png"
const About = () => {
  return (
    <div className="bios">

    
      <div className="section1">
        <div className="profileCard" id="AL">
        <img src="" alt="" className="profilePhoto"/>
        <div className="socials"><div><img src={image1 }alt="" /></div><div><img src={image2} alt="" /></div></div>

          <p>Aron Lomner</p>
        </div>



        <div className="profileCard" id="BR">
        <img src="" alt="" className="profilePhoto"/>
          <div className="socials"><div><img src={image1 }alt="" /></div><div><img src={image2} alt="" /></div></div>

          <p>Brogan Reed</p>
        </div>
      </div>
      <div className="section2">
        <div className="profileCard" id="EK">
        <img src="" alt="" className="profilePhoto"/>
        <div className="socials"><div><img src={image1 }alt="" /></div><div><img src={image2} alt="" /></div></div>
          <p>Evan Kazcor</p>
        </div>
        <div className="profileCard" id="FA">
          <img src="" alt="" className="profilePhoto"/>
          <div className="socials"><div><img src={image1 }alt="" /></div><div><img src={image2} alt="" /></div></div>

          <p>Sebastian Alvarado</p>
        </div>
      </div>
      <div className="section3">
        <div className="profileCard" id="FA">
        <div className="socials"><div><img src={image1 }alt="" /></div><div><img src={image2} alt="" /></div></div>

          <img src="" alt="" className="profilePhoto"/>

          <p>Francisco Alvarado</p>
        </div>
      </div>
    </div>
  );
};
export default About;
