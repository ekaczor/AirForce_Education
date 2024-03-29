import aronLpfp from "../assets/AronLomnerpfp.png";
import broganRpfp from "../assets/BroganReedpfp.jpg";
import evanKpfp from "../assets/EvanKazcorpfp.jpg";
import francApfp from "../assets/Francpfp.jpg";
import githubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedin-logo.png";
import sebApfp from "../assets/nopfp.jpg";
import "../style/AboutStyle.css";

const About = () => {
  const playCoinSound = () => {
    const audio = new Audio("src/assets/sounds/Coin.mp3");
    audio.play();
  };

  return (
    <div className="bios">
      <div className="section1">
        <div className="profileCard" id="AL">
          <a
            href="https://www.aronlomner.com/"
            target="blank"
            onClick={playCoinSound}
          >
            {" "}
            <img src={aronLpfp} alt="" className="profilePhoto" />
          </a>
          <div className="comment-bio">
            <p>
              {" "}
              Passionate self-taught programmer with a HSE Diploma, specializing
              in Python, Lua, Godot, GDScript, Flutter, Dart, and networking.
              Currently enrolled in the WeCanCodeIt Bootcamp, mastering Java,
              Spring Boot, JavaScript, HTML, CSS, and React, aiming for a Web
              Developer role upon graduation in January 2024.
            </p>
          </div>

          <div className="socials">
            <div>
              <a
                href="https://github.com/Aron-Lomner"
                target="blank"
                onClick={playCoinSound}
              >
                <img src={githubLogo} alt="Aron's Github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aron-lomner-032643299/"
                target="blank"
                onClick={playCoinSound}
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
              Brogan is a passionate participant in the WeCanCode IT programming
              bootcamp, where they are honing their skills and knowledge in the
              world of coding. With a relentless drive to excel in the tech
              industry, Brogan is dedicated to mastering the intricacies of
              programming and contributing innovative solutions to the
              ever-evolving field.
            </p>
          </div>

          <div className="socials">
            <div>
              <a
                href="https://github.com/BroganDR"
                target="blank"
                onClick={playCoinSound}
              >
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
          <a
            href="https://ekaczor.github.io/index.html"
            target="blank"
            onClick={playCoinSound}
          >
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
              Recent We Can Code IT grad (Jan/24) with skills from Production
              Coordinator—great at communication, teamwork, and time management.
              Ready to apply Full-Stack Java expertise in Columbus, Ohio, for a
              team valuing collaboration, communication, and top-notch customer
              support. Eager software engineer seeking the right opportunity.
            </p>
          </div>
          <div className="socials">
            <div>
              <a
                href="https://github.com/ekaczor"
                target="blank"
                onClick={playCoinSound}
              >
                <img src={githubLogo} alt="Evan's github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/evan-kaczor-777585293/"
                onClick={playCoinSound}
              >
                <img src={linkedInLogo} alt="Evans LinkedIn" />
              </a>
            </div>
          </div>
          <p className="nametag">Evan Kaczor</p>
        </div>
        <div className="profileCard" id="SA">
          <a
            href="https://alealvarado12.github.io/"
            target="blank"
            onClick={playCoinSound}
          >
            <img
              src={sebApfp}
              alt="Sebastian's Portfolio"
              className="profilePhoto"
            />
          </a>
          <div className="comment-bio">
            <p>
              {" "}
              Passionate about coding, i'm making a career shift and currently
              enrolled in a coding bootcamp. Exploring the intricacies of
              programming feels like unlocking a new world. Excited to embrace
              this journey into the tech realm!
            </p>
          </div>

          <div className="socials">
            <div>
              <a
                href="https://alealvarado12.github.io"
                target="blank"
                onClick={playCoinSound}
              >
                <img src={githubLogo} alt="Sebastian's github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/sebastian-alvarado-5091a31b8/"
                onClick={playCoinSound}
              >
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
"
            target="blank"
            onClick={playCoinSound}
          >
            <img
              src={francApfp}
              alt="Francisco's Porfolio"
              className="profilePhoto"
            />
            <img
              src={francApfp}
              alt="Francisco's Porfolio"
              className="profilePhoto"
            />
          </a>
          <div className="socials">
            <div>
              <a
                href="https://github.com/FranAlv12"
                target="blank"
                onClick={playCoinSound}
              >
                <img src={githubLogo} alt="Francisco's Github" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/francisco-alvarado-1419522a0/"
                target="blank"
              >
                <img
                  src={linkedInLogo}
                  alt="Francisco's LinkedIn"
                  onClick={playCoinSound}
                />
              </a>
            </div>
          </div>
          <div className="comment-bio">
            <p>
              {" "}
              A bilingual young member of the Army National Guard. Becoming a
              Full Stack Java Developer has become my goal. The goal is to
              develop everyday skills and work as a member of a team. Eager to
              join a growth-oriented community that seeks to innovate and move
              forward.
            </p>
          </div>

          <p className="nametag">Francisco Alvarado</p>
        </div>
      </div>
    </div>
  );
};
export default About;
