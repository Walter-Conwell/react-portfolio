import React from "react";
import Project from "./Project";

// project component is rendered onto the portfolio component.

  const Portfolio = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Description of Project 1',
        imageUrl: 'image-url-1',
        projectUrl: 'project-url-1'
      }
      // -second column will be used as more I create more projects!.
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
        
        {/* projects are iterated through with map method - no hard coding needed! */}
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
