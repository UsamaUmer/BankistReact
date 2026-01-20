import { Link } from "react-router-dom";
import bankist from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img
        src={bankist}
        alt="Bankist logo"
        className="nav__logo"
        id="logo"
        designer="Jonas"
        data-version-number="3.0"
      />
      <ul className="nav__links">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Features
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="#section--2">
            Operations
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="#section--3">
            Testimonials
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link nav__link--btn btn--show-modal" to="#">
            Open account
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
