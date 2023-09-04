import React from 'react';

const Projects = () => {

  const projects = [
    {
        title: 'IN2000 - Software Engineering med Prosjektarbeid',
        description: 'Gruppeprosjekt der vi brukte API fra Metrologisk Intitutt og laget en Android app som viser skylaget til fjelltopper i Norge',
        githubLink: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Musikk spiller - React',
        description: 'Fulgt et kurs der man lager en musikkspiller nettside',
        githubLink: 'https://github.com/yourusername/project2',
    },
    {
        title: 'IN2140 - Introduksjon til operativsystemer og datakommunikasjon',
        description: 'Laget et UDP-basert chattjeneste på hjemmeeksamen',
        githubLink: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
