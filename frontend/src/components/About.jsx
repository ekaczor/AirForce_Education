import "../style/AboutStyle.css";
import githubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedin-logo.png";

import evanKpfp from "../assets/EvanKazcorpfp.jpg";
import aronLpfp from "../assets/AronLomnerpfp.png";
import broganRpfp from "../assets/BroganReedpfp.jpg";
import sebApfp from "../assets/nopfp.jpg";
import francApfp from "../assets/Francpfp.jpg";

const About = () => {
  return (
    <div className="bios" >
      <div className="section1">
        <div className="profileCard" id="AL">
          <a href="https://www.aronlomner.com/" target="blank">
            {" "}
            <img src={aronLpfp} alt="" className="profilePhoto" />
          </a>
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
              <a href="https://github.com/Aron-Lomner" target="blank">
                <img src={githubLogo} alt="Aron's Github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aron-lomner-032643299/"
                target="blank"
              >
                <img src={linkedInLogo} alt="Aron's Linked in" />
              </a>
            </div>
          </div>

          <p className="nametag">Aron Lomner</p>
        </div>

        <div className="profileCard" id="BR">
          <img src={broganRpfp} alt="" className="profilePhoto" />
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
              <a href="https://github.com/BroganDR" target="blank">
                <img src={githubLogo} alt="" />
              </a>
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
          <a href="https://ekaczor.github.io/index.html" target="blank">
            {" "}
            <img
              src={evanKpfp}
              alt="Evan's portfolio'"
              className="profilePhoto"
            />
          </a>
          <div className="comment-bio">
            <p>
              {" "}
              Recent We Can Code IT grad (Jan/24) with skills from Production Coordinator—great at communication, teamwork, and time management. Ready to apply Full-Stack Java expertise in Columbus, Ohio, for a team valuing collaboration, communication, and top-notch customer support. Eager software engineer seeking the right opportunity.
            </p>
          </div>
          <div className="socials">
            <div>
              <a
                href="https://github.com/ekaczor"
                target="blank"
              >
                <img src={githubLogo} alt="Evan's github" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/evan-kaczor-777585293/">
                <img src={linkedInLogo} alt="Evans LinkedIn" />
              </a>
            </div>
          </div>
          <p className="nametag">Evan Kaczor</p>
        </div>
        <div className="profileCard" id="SA">
          <a href="https://alealvarado12.github.io/" target="blank">
            <img
              src={sebApfp}
              alt="Sebastian's Portaolio"
              className="profilePhoto"
            />
          </a>
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
                <img src={githubLogo} alt="Sebastian's github" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sebastian-alvarado-5091a31b8/">
                <img src={linkedInLogo} alt="Sebastian's Linkedin" />
              </a>
            </div>
          </div>

          <p className="nametag">Sebastian Alvarado</p>
        </div>
      </div>
      <div className="section3">
        <div className="profileCard" id="FA">
          <a
            href="https://franalv12.github.io/
"target="blank"
          >
            <img src={francApfp} alt="Francisco's Porfolio" className="profilePhoto" />
          </a>
          <div className="socials">
            <div>
              <a
                href="https://github.com/FranAlv12" target="blank"><img src={githubLogo} alt="Francisco's Github" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/francisco-alvarado-1419522a0/" target="blank"><img src={linkedInLogo} alt="Francisco's LinkedIn" /></a>
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

          <p className="nametag">Francisco Alvarado</p>
        </div>
      </div>
    </div>
  );
};
export default About;
