import React from "react";
import logo from "../../public/svg/logo.svg";
import banner from "../../public/images/banner.jpg";
import facebookContact from "../../public/svg/facebook.svg";
import youtubeSubcrise from "../../public/svg/youtube.svg";
import location from "../../public/svg/location.svg";
import users from "../../public/svg/users.svg";
import "./Header.css";

const Header = () => {
  return (
    <header
      className="navbar_horizontal relative"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    ${banner}
				)`,
        backgroundPosition: "center center",
      }}
    >
      <nav className="w-[88%] flex justify-between items-center rounded-xl absolute top-5 bg-white">
        <img width="7%" className="p-2" src={logo} alt="logo" />
        <div className="flex justify-evenly item-center gap-8">
          <div className="active_herder">
            <a href="/#">HOME</a>
          </div>
          <div className="active_herder">
            <a href="/#">ABOUT US</a>
          </div>
          <div className="active_herder">
            <select
              className="text-sm font-[800] text-black no-underline"
              name="TOUR"
              id=""
            >
              <option value="">TOUR</option>
              <option value="">test 2</option>
              <option value="">test 3</option>
            </select>
          </div>
          <div className="active_herder">
            <a href="/#">DESTINATIONS</a>
          </div>
          <div className="active_herder">
            <a href="/#">BLOG</a>
          </div>
          <div className="active_herder">
            <a href="/#">FAQ</a>
          </div>
          <div className="active_herder">
            <a href="/#">CONTACT</a>
          </div>
          <div className="active_herder">
            <a href="/#">VIETNAM CHEERS HOTEL</a>
          </div>
        </div>
        <div className="flex gap-2 pr-2">
          <img width={"70%"} src={facebookContact} alt="facebook" />
          <img width={"70%"} src={youtubeSubcrise} alt="youtube" />
        </div>
      </nav>
      <div className="w-[75%] flex flex-col items-center gap-8 absolute bottom-10 rounded-xl">
        <div className="w-[50%] text-[#FFFFFF]">
          <h1 className="leading-[1rem] text-[300%] ">BACK TO</h1>{" "}
          <h1 id="nature_headtitle">nature</h1>
        </div>
        <div className="w-90% p-3 flex justify-between text-black bg-white">
          <div>
            <p className="text-[70%] text-[#727272] mb-2">TOUR</p>
            <div className="flex gap-3 font-bold">
              <img src={location} alt="Bản đồ" />
              <p>HAGIANG LOOP TOUR</p>
            </div>
          </div>
          <div>
            <p className="text-[70%] text-[#727272] mb-2">SELF-DRIVING</p>
            <div className="flex gap-3 font-bold">
              <img src={users} alt="Người dùng" />
              <p>2 pax</p>
            </div>
          </div>
          <div>
            <p className="text-[70%] text-[#727272] mb-2">PRIVATE DRIVER</p>
            <div className="flex gap-3 font-bold">
              <img src={users} alt="Người dùng" />
              <p>5 pax</p>
            </div>
          </div>
          <button className="rounded-xl p-1 bg-[#B34B1E] text-white">
            <p className="font-bold text-xl">$299</p>
            <p>BOOK NOW</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
