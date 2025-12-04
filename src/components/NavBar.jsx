import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid black' }}>
      <div>August Barret</div>
      <div>
        <Link to="/work" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Work</Link>
        <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>About</Link>
      </div>
    </nav>
  );
}

export default NavBar;