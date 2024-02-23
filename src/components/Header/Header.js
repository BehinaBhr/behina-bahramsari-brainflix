import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import videos from "../../data/video-details.json";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={logo} alt="Brainflix Logo" />
      </div>
      <nav className="header__nav">
        <div className="search">
          <img className="search__icon" src={search} alt="Search Icon" />
          <input className="search__box" placeholder="Search" />
        </div>

        <div className="avatar">
          <img className="avatar__image" src={avatar} alt="User Avatar" />
        </div>

        <div className="upload">
          <img className="upload__icon" src={upload} alt="Upload Icon" />
          <button className="upload__button">UPLOAD</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
