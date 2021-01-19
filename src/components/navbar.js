import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="navbar d-flex">
        <Link to="/" style={{ color: "inherit" }}>
          <li className="nav-item">CONTACT</li>
        </Link>
        <Link to="/projects" style={{ color: "inherit" }}>
          <li className="nav-item">PROJECTS</li>
        </Link>
        <Link to="/about" style={{ color: "inherit" }}>
          <li className="nav-item">ABOUT ME</li>
        </Link>
        <Link to="/certificates" style={{ color: "inherit" }}>
          <li className="nav-item">CERTIFICATIONS</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
