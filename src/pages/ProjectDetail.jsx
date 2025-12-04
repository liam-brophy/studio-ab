import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

// Project data with image sets
const projectDetails = {
  1: {
    title: 'Project One',
    description: 'A creative exploration of design and composition',
    images: [
      '/projects/1/image1.jpg',
      '/projects/1/image2.jpg',
      '/projects/1/image3.jpg',
      '/projects/1/image4.jpg'
    ]
  },
  2: {
    title: 'Project Two',
    description: 'Innovative approach to visual storytelling',
    images: [
      '/projects/2/image1.jpg',
      '/projects/2/image2.jpg',
      '/projects/2/image3.jpg'
    ]
  },
  3: {
    title: 'Project Three',
    description: 'Experimental work with form and structure',
    images: [
      '/projects/3/image1.jpg',
      '/projects/3/image2.jpg',
      '/projects/3/image3.jpg',
      '/projects/3/image4.jpg',
      '/projects/3/image5.jpg'
    ]
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project Not Found</h1>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1>{project.title}</h1>
        <p className="project-description">{project.description}</p>
        
        <div className="images-gallery">
          {project.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image} 
                alt={`${project.title} - Image ${index + 1}`}
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="24"%3EImage ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
