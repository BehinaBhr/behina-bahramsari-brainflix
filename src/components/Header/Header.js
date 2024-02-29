import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarSrc from "../../assets/images/Mohan-muruge.jpg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={logo} alt="Brainflix Logo" />
      </div>
      <nav className="header__nav">
        <div className="header__search">
          <img className="header__search__icon" src={search} alt="Search Icon" />
          <input className="header__search__input" placeholder="Search" />
        </div>

        <div className="header__avatar">
            <Avatar avatarSrc={avatarSrc}/>
        </div>
        <div className="header__button">
        <Link to="/upload">
          <Button iconSrc={upload} text="upload"/>
        </Link>
        </div>

      </nav>
    </header>
  );
}

export default Header;
