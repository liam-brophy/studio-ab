import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>August's Portfolio</h1>
        <p className="subtitle">Creative Works & Projects</p>
        <nav className="home-nav">
          <Link to="/projects" className="nav-button">View Projects</Link>
          <Link to="/bio" className="nav-button">About Me</Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
