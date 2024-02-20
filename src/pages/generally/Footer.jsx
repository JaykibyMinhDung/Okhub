import React from "react";
import footerImg from "../../public/images/footer.png";
import logo from "../../public/svg/logo.svg";
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
      <div style={{ width: "70%", display: 'flex', justifyContent: 'center', gap: '70px' }}>
        <div>
          <div>
          <h3>CONTACT US</h3>
            <p>84 98 3333 986 (Miss. Linette)</p>
            <p>84 989 655 995 (Mr. Chinh)</p>
          </div>
          <p>@cheershoster1@gmail.com</p>
          <p>5 Au Trieu, Hoan Kien, Ha Noi</p>
          <p>Vietnam Cheers Hostel Official Site</p>
        </div>
        <div>
          <h3>ALL TOUR</h3>
          <p>Ha Giang Tour (3D3N)</p>
          <p>Ha Giang Tour (4D4N)</p>
          <p></p>
        </div>
        <div>
          <h3>CHEERS TOURS</h3>
          <p>Ha Long Bay</p>
          <p>Sapa Trekking Tour</p>
          <p>Pu Luong Cheers Tour</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
