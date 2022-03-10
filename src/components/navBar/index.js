import { Link } from "react-router-dom";
import "./index.css";

function HeaderNav(props) {
  return (
    <nav className="navbar container nav-box">
      <div className="logo-title d-flex">
        <h1 className="title-brand ">Fa</h1>
        <h1 className="title  ms-3">Form Authenticate</h1>
      </div>
      <div className="d-flex button__sm">
        <Link to="/">
          <button className=" btn form-btn btn-primary me-3">Login</button>
        </Link>
        <Link to="/sign-up">
          <button className="btn form-btn  btn-warning">SignUp</button>
        </Link>
      </div>
    </nav>
  );
}

export default HeaderNav;
