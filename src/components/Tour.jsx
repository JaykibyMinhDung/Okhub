import React from "react";
import Button from "./Button";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import users from "../public/svg/users.svg";
import motorbike from "../public/svg/motorbike.svg";
import check from "../public/svg/check.svg";

import discover from "../public/images/discoverHaGiang.png";
import teamWork from "../public/images/teamwork.png";

import "swiper/css";

const Tour = (image) => {
  //   const { images } = image;
  return (
    <div className="flex md:flex-nowrap flex-wrap">
      <div className="w-[100%] mb-4 mobile_mainImage--active ">
        <img width={"100%"} src={teamWork} alt="" srcset="" />
      </div>
      <div>
        <div>
          <h3>H'MONG TEAM</h3>
          <p className="pb-2">
            Blown away by our Tanzania safari, I never expected it to be that
            good — it totally exceeded my expectations and was all hassle free.
            Our guide was absolutely amazing too. Have re-booked and cannot wait
            for next year! Blown away by our Tanzania safari, I never expected
            it to be that good — it totally exceeded my expectations and was all
            hassle free. Our guide was absolutely amazing too. Have re-booked
            and cannot wait for .Our guide was absolutely amazing too.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <img width={"15px"} src={users} alt="" />
            <p>
              <b className="text-[#B34B1E]">Group size: </b>
              <span>15 members</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={motorbike} alt="" />
            <p>
              <b className="text-[#B34B1E]">Transport: </b>
              <span>Motorbike</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img width={"15px"} src={check} alt="" />
            <p>
              <b className="text-[#B34B1E]">Trip completed: </b>
              <span>154 trips</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 hoverButton">
          <Button name="JOIN WITH US" cancelButton={false} />
          <Button name="CALL US" cancelButton={true} />
        </div>
      </div>
      <div className="flex gap-2 mobile_mainImage">
        <img width={"80%"} src={discover} alt="" srcset="" />
        <img width={"20%"} src={teamWork} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Tour;

/* <Swiper
          spaceBetween={50}
          slidesPerView={2}
        >
          {images.map((e) => (
            <SwiperSlide>
              <div>
                <img width={"30%"} src={e} alt="error" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */

/* <Slide>
         {images.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div
          ))} 
        </Slide> */
