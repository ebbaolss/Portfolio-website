import React from 'react';

const Projects = () => {

  const projects = [
    {
        title: 'IN2000 - Software Engineering med Prosjektarbeid',
        description: 'Gruppeprosjekt der vi brukte API fra Metrologisk Intitutt og laget en Android app som viser skylaget til fjelltopper i Norge',
        githubLink: 'https://github.com/ebbaolss/IN2000-Sikt.git',
    },
    {
      title: 'IN2030 - Prosjektoppgave i programmering Java',
      description: 'Laget en interpret for et programmeringsspråk Asp',
      githubLink: 'https://github.com/ebbaolss/IN2030.git',
    },
    {
      title: 'Portfolio website',
      description: '(this website)',
      githubLink: 'https://github.com/ebbaolss/Portfolio-website.git',
    },
    {
        title: 'IN2140 - Introduksjon til operativsystemer og datakommunikasjon',
        description: 'Laget et UDP-basert chattjeneste på hjemmeeksamen',
        githubLink: 'xx',
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
