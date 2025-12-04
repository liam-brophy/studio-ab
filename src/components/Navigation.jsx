import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          studio-ab
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={location.pathname.startsWith('/project') ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/bio" 
              className={location.pathname === '/bio' ? 'active' : ''}
            >
              Bio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
