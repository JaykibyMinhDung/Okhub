import React from "react";
import logo from "../../public/svg/logo.svg";
import banner from "../../public/images/banner.jpg";
import facebookContact from "../../public/svg/facebook.svg";
import youtubeSubcrise from "../../public/svg/youtube.svg";
import "./Header.css";

const Header = () => {
  return (
    <header
      className="navbar_horizontal"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    ${banner}
				)`,
        backgroundPosition: "center center",
      }}
    >
      <nav className="flex pt-2 justify-between bg-white">
        <img src={logo} alt="logo" />
        <a href="/#">HOME</a>
        <a href="/#">ABOUT US</a>
        <a href="/#">TOUR</a>
        <a href="/#">DESTINATIONS</a>
        <a href="/#">BLOG</a>
        <a href="/#">FAQ</a>
        <a href="/#">CONTACT</a>
        <a href="/#">VIETNAM CHEERS HOTEL</a>
        <img src={facebookContact} alt="facebook" />
        <img src={youtubeSubcrise} alt="youtube" />
      </nav>
      <div>BACK TO NATURE</div>
      <div>
        <div>
          <p>TOUR</p>
          <div>
            <img src="" alt="" />
            <p>HAGIANG LOOP TOUR</p>
          </div>
        </div>
        <div>
          <p>SELF-DRIVING</p>
          <div>
            <img src="" alt="" />
            <p>2 pax</p>
          </div>
        </div>
        <div>
          <p>PRIVATE DRIVER</p>
          <div>
            <img src="" alt="" />
            <p>5 pax</p>
          </div>
        </div>
        <button>
            <p>$299</p>
            <p>BOOK NOW</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
