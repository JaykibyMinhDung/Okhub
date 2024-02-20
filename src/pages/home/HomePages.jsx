import React from "react";
import mapVietNam from '../../public/svg/map.svg'
import "./home.css";

const HomePages = () => {
  return (
    <main>
      <div>
        <h3>WELCOME TO</h3>
        <h1>HA GIANG LOOP</h1>
        <h1 id="test">Viet Nam</h1>
      </div>
      <div>
        <div>
        <div>
          <h3>START WITH</h3>
          <h1>HA GIANG CHEERS TOUR</h1>
        </div>
        <div>
          <button type="button">SUPPORT LOCAL - SUSTAINABLE TRAVEL</button>
          <button type="button">FREE 100% CANCELLATION</button>
          <button type="button">DAILY DEPARTURES</button>
          <button type="button">NO HAPPY - FULL REFUND</button>
        </div>
        <div>
          <p>
            The 3 Days Epic Ha giang Loop Tour with easy rider organized by
            Vietnam Cheers Hostel is a must in Vietnam for any traveller. It is
            considered a highlight of South East Asia. Explore Ma Pi Leng, one
            of The Big Four Passes in Vietnam, through thousands of conical
            limestone peaks as well as deep and meandering valleys. Party
            dinner, waterfall and local le at authentic Cheers Du Gia Homestay.
            will be the unique experience also. This is designed for
            adventure-seekers — those who want to experience the biggest
            challenge Vietnam has to offer in a safe environment with our
            experienced easy riders.
          </p>
        </div>
        <div>
          <button type="button">BOOK NOW</button>
          <button type="button">READ MORE</button>
        </div>
        </div>
        <div>
            <img src={mapVietNam} alt="" />
        </div>
      </div>
      <div></div>
      <div></div>
    </main>
  );
};

export default HomePages;
