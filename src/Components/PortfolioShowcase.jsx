import React, { useState } from 'react';
import data from './../data.json';
import Modal from './Modal';
import './../App.css';

const PortfolioShowcase = () => {
  const [category, setCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const web_apps = data.web_apps;
  const mobile_apps = data.mobile_apps;
  const gaming_ui = data.gaming_ui;

  const getAllProjects = () => {
    switch (category) {
      case 'Web Apps':
        return web_apps;
      case 'Mobile Apps':
        return mobile_apps;
      case 'Gaming UI':
        return gaming_ui;
      default:
        return [...web_apps, ...mobile_apps, ...gaming_ui];
    }
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const filteredProjects = getAllProjects();

  return (
    <div className='portfolioPage'>
      <h2>Portfolio</h2>
      <div className='portfolio-categories'>
        <button onClick={() => handleCategoryClick('All')}>All</button>
        <button onClick={() => handleCategoryClick('Web Apps')}>Web Apps</button>
        <button onClick={() => handleCategoryClick('Mobile Apps')}>Mobile Apps</button>
        <button onClick={() => handleCategoryClick('Gaming UI')}>Gaming UI</button>
      </div>
      <div className='gallery'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='project' onClick={() => handleProjectClick(project)}>
            <img className='projectImg' src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default PortfolioShowcase;
