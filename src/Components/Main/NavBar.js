import { Link } from "react-router-dom";
import NetflixFullLogo from "../../Asset/logo-full.png"
import LanguageSwitcher from "./LanguageSwitcher";
import './Styles/NavBar.css'

const NavBar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-box">
          <Link to="/Netflix-clone">
            <img
              className="logo"
              src={NetflixFullLogo}
              alt="Netflix Logo"
            />
          </Link>
        </div>
        <div className="button-box">
          <LanguageSwitcher />
          <button className="sign-in">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
