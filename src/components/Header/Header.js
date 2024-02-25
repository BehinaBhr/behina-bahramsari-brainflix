import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarSrc from "../../assets/images/Mohan-muruge.jpg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'

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

        <div className="header__avatar">
            <Avatar avatarSrc={avatarSrc}/>
        </div>
        <div className="header__button">
          <Button iconSrc={upload} text="upload"/>
        </div>

      </nav>
    </header>
  );
}

export default Header;
