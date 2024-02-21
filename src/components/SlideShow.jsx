import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image1 from "../public/images/discoverHaGiang.png"
import image2 from "../public/images/teamwork.png"

const SlideShow = () => {
    const data = [image1, image2]
  return <div>
          <div className="flex gap-2">
        <img width={'20%'} src={image1} alt="" srcset="" />
        <img width={'20%'} src={image2} alt="" srcset="" />
        <img width={'20%'} src={image2} alt="" srcset="" />
        <img width={'20%'} src={image2} alt="" srcset="" />
        <img width={'20%'} src={image2} alt="" srcset="" />
        <img width={'20%'} src={image2} alt="" srcset="" />
      </div>
  </div>;
};

export default SlideShow;
