import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand">Movie App</div>
        <div className="navbar-links gap-3 d-flex flex-row">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/favorite" className="navLink">
            Favorite
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
