import "../style/AboutStyle.css";
import githubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedin-logo.png";
import image3 from "../assets/NeverGiveUp.png";
const About = () => {
  return (
    <div className="bios" style={{zIndex:'0'}}>
      <div className="section1">
        <div className="profileCard" id="AL">
          <img src={image3} alt="" className="profilePhoto" />
          <div className="comment-bio">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam unde in laborum? Consequuntur rem veniam
              architecto vitae. Voluptatum, earum! Quas, perspiciatis corrupti?
              Optio sit quaerat suscipit sint necessitatibus. Tempore.
            </p>
          </div>

          <div className="socials">
            <div>
              <a href="">
                <img src={githubLogo} alt="" />
              </a>
            </div>
            <div>
              <a href=""></a>
              <img src={linkedInLogo} alt="" />
            </div>
          </div>

          <p className="nametag">Aron Lomner</p>
        </div>

        <div className="profileCard" id="BR">
          <img src={image3} alt="" className="profilePhoto" />
          <div className="comment-bio">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam unde in laborum? Consequuntur rem veniam
              architecto vitae. Voluptatum, earum! Quas, perspiciatis corrupti?
              Optio sit quaerat suscipit sint necessitatibus. Tempore.
            </p>
          </div>

          <div className="socials">
            <div>
              <img src={githubLogo} alt="" />
            </div>
            <div>
              <img src={linkedInLogo} alt="" />
            </div>
          </div>

          <p className="nametag">Brogan Reed</p>
        </div>
      </div>
      <div className="section2">
        <div className="profileCard" id="EK">
          <img src={image3} alt="" className="profilePhoto" />
          <div className="comment-bio">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam unde in laborum? Consequuntur rem veniam
              architecto vitae. Voluptatum, earum! Quas, perspiciatis corrupti?
              Optio sit quaerat suscipit sint necessitatibus. Tempore.
            </p>
          </div>
          <div className="socials">
            <div>
              <img src={githubLogo} alt="" />
            </div>
            <div>
              <img src={linkedInLogo} alt="" />
            </div>
          </div>
          <p className="nametag">Evan Kazcor</p>
        </div>
        <div className="profileCard" id="FA">
          <img src={image3} alt="" className="profilePhoto" />
          <div className="comment-bio">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam unde in laborum? Consequuntur rem veniam
              architecto vitae. Voluptatum, earum! Quas, perspiciatis corrupti?
              Optio sit quaerat suscipit sint necessitatibus. Tempore.
            </p>
          </div>

          <div className="socials">
            <div>
              <a href="https://alealvarado12.github.io" target="blank">
                <img src={githubLogo} alt="" />
              </a>
            </div>
            <div>
              <img src={linkedInLogo} alt="" />
            </div>
          </div>

          <p className="nametag">Sebastian Alvarado</p>
        </div>
      </div>
      <div className="section3">
        <div className="profileCard" id="FA">
          <div className="socials">
            <div>
              <img src={githubLogo} alt="" />
            </div>
            <div>
              <img src={linkedInLogo} alt="" />
            </div>
          </div>
          <div className="comment-bio">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam unde in laborum? Consequuntur rem veniam
              architecto vitae. Voluptatum, earum! Quas, perspiciatis corrupti?
              Optio sit quaerat suscipit sint necessitatibus. Tempore.
            </p>
          </div>

          <img src={image3} alt="" className="profilePhoto" />

          <p className="nametag">Francisco Alvarado</p>
        </div>
      </div>
    </div>
  );
};
export default About;
