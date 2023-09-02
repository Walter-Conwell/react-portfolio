import React from "react";
import Project from "./Project";

  const Portfolio = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Description of Project 1',
        imageUrl: 'image-url-1',
        projectUrl: 'project-url-1'
      }
      // {
      //   title: 'Project 2',
      //   description: 'Description of Project 2',
      //   imageUrl: 'image-url-2',
      //   projectUrl: 'project-url-2'
      // },
    ];
  
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <h2 style={{ marginLeft: "10px" }}>My Portfolio</h2>
        
        <div className="row" style={{ width: "auto", display: "flex" }}>
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Project
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Portfolio;
