import React from "react";
import footerImg from "../../public/images/footer.png";
import logo from "../../public/svg/logo.svg";
import location from "../../public/svg/location.svg";
import home from "../../public/svg/home.svg";
import motorbike from "../../public/svg/motorbike.svg";
import contact from "../../public/svg/contact.svg";
import email from "../../public/svg/email.svg";
import hotel from "../../public/svg/hotel.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="footer_horizontal"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                ${footerImg}
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div style={{ width: "30%" }}>
        <img width={"50%"} src={logo} alt="" />
      </div>
      <div className="w-[70%] flex justify-evenly gap-16">
        <div>
          <h3 className="font-bold" >CONTACT US</h3>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={contact} alt="" />
            <div>
              <p>+ 84 98 3333 986 (Miss. Linette)</p>
              <p>+ 84 989 655 995 (Mr. Chinh)</p>
            </div>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={email} alt="" />
            <p>@cheershoster1@gmail.com</p>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={home} alt="" />
            <p>5 Au Trieu, Hoan Kien, Ha Noi</p>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={hotel} alt="" />
            <p>Vietnam Cheers Hostel Official Site</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold" >ALL TOUR</h3>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={motorbike} alt="" />
            <p>Ha Giang Tour (3D3N)</p>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img src={motorbike} alt="" />
            <p>Ha Giang Tour (4D4N)</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold" >CHEERS TOURS</h3>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img width={'10%'} src={location} alt="" />
            <p>Ha Long Bay</p>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img width={'10%'} src={location} alt="" />
            <p>Sapa Trekking Tour</p>
          </div>
          <div className="p-2 flex items-center gap-2 text-[#727272] ">
            <img width={'10%'} src={location} alt="" />
            <p>Pu Luong Cheers Tour</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
