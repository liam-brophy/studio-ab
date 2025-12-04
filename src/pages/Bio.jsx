import './Bio.css';

function Bio() {
  return (
    <div className="bio">
      <div className="container">
        <h1>About Me</h1>
        <div className="bio-content">
          <p>
            Welcome! I'm August, a creative professional passionate about bringing ideas to life
            through visual storytelling and design. This portfolio showcases my work across
            various projects and mediums.
          </p>
          <p>
            With a focus on innovation and attention to detail, I strive to create compelling
            experiences that resonate with audiences. Each project represents a unique journey
            of exploration and creative problem-solving.
          </p>
          
          <div className="bio-links">
            <a href="/resume.pdf" download className="bio-link">
              Download Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/august-brophy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bio-link"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
