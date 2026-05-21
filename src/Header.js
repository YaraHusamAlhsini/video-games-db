import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h2>GameDB</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;