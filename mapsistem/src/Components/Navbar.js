import { Link } from "react-router-dom";
import logo from "../assets/logo1.png"
import "./Navbar.css"



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg minhaNav">
      <div className="container">
 <Link className="navbar-brand d-flex align-items-center" to="/">

          <img src={logo} alt="logotipo" className="logotipo"/>

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item links">
              <Link className="nav-link a" to="/">Home</Link>
            </li>

             <li className="nav-item links">
              <Link className="nav-link a" to="/Cursos">Cursos</Link>
            </li>

             <li className="nav-item links">
              <Link className="nav-link a" to="/Instituições">Instituições</Link>
            </li>

            <li className="nav-item links">
              <Link className="nav-link a" to="/Parceiros">Parceiros</Link>
            </li>

            <li className="nav-item links">
              <Link className="nav-link a" to="/ff"><i className="bi-person-circle icone"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
