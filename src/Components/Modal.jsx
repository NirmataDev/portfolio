import React, { useState, useEffect } from 'react';

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector('.popup-content');
      if (modalContent && !modalContent.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const [images, setImages] = useState({
    video: project.video,
    img1: project.images[0],
    img2: project.images[1],
    img3: project.images[2],
    img4: project.images[3]
  });

  const [activeMedia, setActiveMedia] = useState(project.video);

  const handleClickMedia = (media) => {
    setActiveMedia(media);
  };

  return (
    <div className="popup">
      <div className="popup-content">
      <button className="close-btn" onClick={onClose}>&#10006;</button>
        <div className='ProjectDisplay'>
          {activeMedia === project.video ? (
            <iframe src={activeMedia} title="video" frameborder="0" allowfullscreen style={{ width: "500px", height: "400px" }}></iframe>
          ) : (
            <div className='selectedImg'>
              <img src={activeMedia} alt="product" style={{ width: "500px", height: "400px" }} />
            </div>
          )}
          <div className='imgArray'>
          {Object.entries(images).map(([key, media], index) => (
            <div key={index} onClick={() => handleClickMedia(media)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {key === 'video' ? (
                <div className='unucode' style={{ fontSize: 35}}>{String.fromCharCode(parseInt('23F5', 16))}</div>
              ) : (
                <img src={media} alt={`image ${index}`} style={{ width: "75px", height: "50px", marginRight: "10px" }} />
              )}
            </div>
          ))}
        </div>
        </div>
        
        <div className='ProjectDetails'>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className='buttonsContainer'>
            <button >Github Link</button>
            <button>View Live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
