import React, { useEffect, useState } from 'react';
import { YouTube, Instagram, GitHub, Twitter } from '@mui/icons-material';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector('.popupContact');
      if (modalContent && !modalContent.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop
      });
    }
  };
  return (
    <div className="navbar">
      <div>
        <button onClick={() => handleClick('Landing')}>Home</button>
        <button onClick={() => handleClick('About')}>About</button>
        <button onClick={() => handleClick('Skills')}>Skills</button>
        <button onClick={() => handleClick('Portfolio')}>Portfolio</button>
      </div>
      <div className='Logo'>
        <button onClick={togglePopup}>CONTACT</button>
      </div>
      {showPopup && (
        <div className="popupContact" onClick={() => setShowPopup(false)}>
          <div className="popupContact-content" onClick={(e) => e.stopPropagation()}>
            <div className='firstContactDiv'>
              
            </div>
            <div className='secondContactDiv'>
              <h1>NIRMATA Discord</h1>
              <p>Feel free to reach out to me on Discord for any questions, collaborations, or just to say hello! I'm always open to connecting with fellow enthusiasts and professionals in the field. Let's chat and explore opportunities together!"</p>
              <div className='social-media-contact'>
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
            <button className="close-btn-contact" onClick={() => setShowPopup(false)}>&#10006;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
