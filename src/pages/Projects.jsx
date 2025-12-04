import { Link } from 'react-router-dom';
import './Projects.css';

// Sample project data - this would typically come from a data file or API
const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A creative exploration of design and composition',
    thumbnail: '/projects/1/thumbnail.jpg'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Innovative approach to visual storytelling',
    thumbnail: '/projects/2/thumbnail.jpg'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Experimental work with form and structure',
    thumbnail: '/projects/3/thumbnail.jpg'
  }
];

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id}
              className="project-card"
            >
              <div className="project-thumbnail">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EProject ' + project.id + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
