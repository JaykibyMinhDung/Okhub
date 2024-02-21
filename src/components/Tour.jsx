import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Tour = (image) => {
  const { images } = image;
  return (
    <div>
      <div>
        <div>
          <h3>H'MONG TEAM</h3>
          <p>
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
          <p>
            <img src="" alt="" />
            <b className="text-[#B34B1E]">group size: </b>
            <span>15 members</span>
          </p>
          <p>
            <img src="" alt="" />
            <b className="text-[#B34B1E]">transport: </b>
            <span>Motorbike</span>
          </p>
          <p>
            <img src="" alt="" />
            <b className="text-[#B34B1E]">Trip completed: </b>
            <span>154 trips</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button name="JOIN WITH US" cancelButton={false} />
          <Button name="CALL US" cancelButton={true} />
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img width={"30%"} src={images[0]} alt="error" /></SwiperSlide>
          {/* {images.map((e) => (
            <SwiperSlide>
              <div>
                <img width={"30%"} src={e} alt="error" />
              </div>
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default Tour;
