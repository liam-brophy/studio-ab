import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #CC5500' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#CC5500' }}>August Barret</Link>
      <div>
        <Link to="/work" style={{ margin: '0 10px', textDecoration: 'none', color: '#CC5500' }}>Work</Link>
        <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', color: '#CC5500' }}>About</Link>
      </div>
    </nav>
  );
}

export default NavBar;