import React from "react";
import './App.css';
import { YouTube, Instagram, GitHub, Twitter } from '@mui/icons-material';
import Landing from "./Images/Land2.jpg";
import About from "./Images/About.jpg";
import Skills from "./Images/Resume.jpg";
import Navbar from "./Components/Navbar";
import PortfolioShowcase from "./Components/PortfolioShowcase";

function App() {
  const scrollToPortfolio = (category) => {
    const portfolioSection = document.getElementById('Portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('Skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <div className='Landing' id='Landing' style={{backgroundImage: `url(${Landing})`, backgroundSize: 'cover', backgroundPosition: "center right"}}>
        <h1>NIRMATA</h1>
        <p>Self-Taught</p>
        <h2>Front-End Developer</h2>
        <div className='buttons'>
          <button  onClick={() => scrollToSkills('Skills')}>Resume</button>
          <button  onClick={() => scrollToPortfolio('Portfolio')}>Portfolio</button>
        </div>
        <div className='social-media'>
          <a href="https://www.youtube.com/channel/your_channel_id" target="_blank" rel="noopener noreferrer">
          <YouTube /> 
          </a>
          <br />
          <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            <Instagram /> 
          </a>
          <br />
          <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
            <GitHub /> 
          </a>
          <br />
          <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </div>
      </div>
      <div className='About' id='About' style={{backgroundImage: `url(${About})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='desc'>
        <h2>ABOUT ME</h2>
        <p>I'm a self-taught full-stack developer with a passion for <span>front-end development</span>. Specializing in crafting captivating user interfaces, I bring concepts to life with clean code and a focus on seamless user experiences. From building responsive <span>web applications</span> to creating <span>mobile apps</span> with React Native, and even delving into the world of <span>gaming UI elements</span>, I'm driven by the pursuit of innovative solutions that push the boundaries of technology.</p>
        </div>
      </div>
      <div className='Skills' id='Skills' style={{backgroundImage: `url(${Skills})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="firstSide">
          <div>
          <h3>Technical Skills</h3>
            <ul>
              <li>
                <label htmlFor="react">React</label>
                <input type="range" id="react" name="react" min="0" max="100" value="80"/>
              </li>
              <li>
                <label htmlFor="ReactNative">React Native</label>
                <input type="range" id="ReactNative" name="ReactNative" min="0" max="100" value="70"/>
              </li>
              <li>
                <label htmlFor="JavaScript">JavaScript</label>
                <input type="range" id="JavaScript" name="JavaScript" min="0" max="100" value="90"/>
              </li>
              <li>
                <label htmlFor="Node.js">Node.js</label>
                <input type="range" id="Node.js" name="Node.js" min="0" max="100" value="95"/>
              </li>
              <li>
                <label htmlFor="MySql">MySql</label>
                <input type="range" id="MySql" name="MySql" min="0" max="100" value="90"/>
              </li>
            </ul>
            <h3>Software Skills</h3>
            <ul>
              <li>
                <label htmlFor="Photoshop">Photoshop</label>
                <input type="range" id="Photoshop" name="Photoshop" min="0" max="100" value="90"/>
              </li>
              <li>
                <label htmlFor="Premiere">Premiere Pro</label>
                <input type="range" id="Premiere" name="Premiere" min="0" max="100" value="60"/>
              </li>
              <li>
                <label htmlFor="VSCode">Visual Studio Code</label>
                <input type="range" id="VSCode" name="VSCode" min="0" max="100" value="90"/>
              </li>
            </ul>
            <h3>Languages</h3>
            <ul>
              <li>
                <label htmlFor="English">English</label>
                <input type="range" id="English" name="English" min="0" max="100" value="75"/>
              </li>
              <li>
                <label htmlFor="Deutsch">Deutsch</label>
                <input type="range" id="Deutsch" name="Deutsch" min="0" max="100" value="75"/>
              </li>
              <li>
                <label htmlFor="Spanish">Spanish</label>
                <input type="range" id="Spanish" name="Spanish" min="0" max="100" value="25"/>
              </li>
              <li>
                <label htmlFor="Rumanien">Rumanien</label>
                <input type="range" id="Rumanien" name="Rumanien" min="0" max="100" value="100"/>
              </li>
            </ul>
          </div>

        <div className="secondColumn">
          <h3>Experience</h3> 
          <ul>
            <li> &#11212; Freelance Web Developer &#8594; View Testimonials</li>
            <li> &#11212; Personal Projects: &#8594; View Portfolio</li>
            <li> &#11212; Open Source Contributions: &#8594; View GitHub</li>
          </ul>

          <h3>Education</h3>
          <ul>
            <li>Self-Taught Full-Stack Developer</li>
            <li> &#11212; Self-directed learning in front-end development for:
              <ul style={{ paddingLeft: '40px' }}>
                <li> &#11212; Web Applications</li>
                <li> &#11212; Mobile Applications</li>
                <li> &#11212; Gaming UI</li>
              </ul>
            </li>

            <li> &#11212; Continuously updating skills through:
              <ul style={{ paddingLeft: '40px' }}>
                  <li> &#11212; Online Courses</li>
                  <li> &#11212; Tutorials</li>
                  <li> &#11212; Projects</li>
                </ul>
            </li>
            <li> &#11212; Completed IBM Full-Stack Course  
            <a href="https://drive.google.com/file/d/1pvjr_-migd4So0xfP3pmqAww0Si8buIu/view?usp=drive_link" target="_blank" rel="noreferrer"> &#8594; View Certification</a>
            </li>
          </ul>
        </div>
      </div>
        <div className="secondSide">
          <div className="project" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/43/40/6c/43406cc4e795389bff91ea5c319513d3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => scrollToPortfolio('Gaming UI')}>
            <h3>Gaming UI</h3>
          </div>
          <div className="project" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/a8/a6/68/a8a668fefd28c8d96465cf227a2e5fd7.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => scrollToPortfolio('Web Development')}>
            <h3>Web Development</h3>
          </div>
          <div className="project" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/fb/70/56/fb7056c477d32c55a26b7cd5b46a6a60.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => scrollToPortfolio('Mobile Development')}>
            <h3>Mobile Development</h3>
          </div>
        </div>
      </div>
      <div className='Portfolio' id='Portfolio' style={{backgroundImage: `url(${Landing})`, backgroundSize: 'cover', backgroundPosition: "center right"}}>
        <PortfolioShowcase />
      </div>  
    </div>
  );
}

export default App;
