import React from "react";
import mapVietNam from "../../public/svg/map.svg";
import button from "../../public/svg/button.svg";
import imageContent from "../../public/images/imageContent.jpg";
// import imageMoutain from "../../public/images/0b923c8f9a519d2d6475704851522ea4.png";
import imageMoutain from "../../public/images/d82790382e4739aa6ec45fc8962eeac4.jpg";
import imageIntro from "../../public/images/694ed1f9b66390adfcad8aaea00ff891.jpg";
import imageThird from "../../public/images/d59d1776936b14c732607a7db21070e9.jpg";
import imageFour from "../../public/images/d6fe19708db70d2cfa7f63b53376f1eb.jpg";
import discover from "../../public/images/discoverHaGiang.png";
import teamWork from "../../public/images/teamwork.png";
import Video from "../../public/video/HÀ GIANG NHỮNG CUNG ĐƯỜNG TRONG MÂY - 4K FLYCAM Video-(1080p).mp4";

import Button from "../../components/Button";
import CustomTabPanel from "../../components/Tab";
import "./home.css";
import Tour from "../../components/Tour";
import SlideShow from "../../components/SlideShow";

const HomePages = () => {
  const test = [discover, teamWork, ""];
  const data = [
    { id: 0, nameTabs: "Tourleader", component: <Tour images={test} /> },
    { id: 1, nameTabs: "Speacialist", component: <SlideShow /> },
    { id: 2, nameTabs: "Localhost", component: <SlideShow /> },
    { id: 3, nameTabs: "Riderteam", component: "test" },
  ];
  return (
    <main className="relative">
      <div>
        <div className="relative h-[55rem]">
          <div className="text-center text-orange-okhub md:z-0">
            <h3 className="md:text-[100%] text-[50%]">WELCOME TO</h3>
            <h1 className="md:text-[300%] text-[200%]">HA GIANG LOOP</h1>
            <h1 id="text_VietNam">Viet Nam</h1>
          </div>
          <div>
            <div className="mobile_album">
              <div className="absolute left-[-5%] top-[0%]">
                <img
                  width={"60%"}
                  className="opacity-60 brightness-100 rounded-xl"
                  src={imageFour}
                  alt="Anh lỗi"
                />
              </div>
              <div className="absolute left-[-15%] top-[30%]">
                <img
                  width={"70%"}
                  className="opacity-60 brightness-100 rounded-xl"
                  src={imageThird}
                  alt="Anh lỗi"
                />
              </div>
              <div className="absolute right-[-30%] top-[0%]">
                <img
                  width={"60%"}
                  className="opacity-60 brightness-100 rounded-xl"
                  src={imageIntro}
                  alt="Anh lỗi"
                />
              </div>
              <div className="absolute right-[-20%] top-[38%]">
                <img
                  width={"60%"}
                  className="opacity-60 brightness-100 rounded-xl"
                  src={imageMoutain}
                  alt="Anh lỗi"
                />
              </div>
            </div>
            <div className="absolute md:left-[25%] md:top-[35%] left-[0%] top-[20%]">
              <video
                className="md:w-[65%] w-[100%] rounded-xl"
                // controls
                autostart={true}
                autoPlay={true}
                loop
                muted
              >
                <source src={Video} media="(min-width: )" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="flex gap-20 md:flex-nowrap flex-wrap md:ml-10 ml-4">
          <div className="w-[50%]">
            <div className="text-orange-okhub md:w-[50%] w-[100%]">
              <h3>START WITH</h3>
              <h1 className="md:text-[300%] text-[200%]">
                HA GIANG CHEERS TOUR
              </h1>
            </div>
            <div className="w-[100%] mobile__mapVietNam--active">
              <img width={"100%"} src={mapVietNam} alt="" />
            </div>
            <div className="w-[100%] grid grid-rows-1 md:grid-cols-2 gap-4 md:place-content-center text-white">
              <button
                className="hover:bg-transparent"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                  ${button}
      )`,
                  backgroundPosition: "center center",
                  height: "70px",
                  margin: "10px",
                }}
                type="button"
              >
                SUPPORT LOCAL - SUSTAINABLE TRAVEL
              </button>
              <button
                className="hover:bg-transparent"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                  ${button}
      )`,
                  backgroundPosition: "center center",
                  height: "70px",
                  margin: "10px",
                }}
                type="button"
              >
                FREE 100% CANCELLATION
              </button>
              <button
                className="hover:bg-transparent"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                  ${button}
      )`,
                  backgroundPosition: "center center",
                  height: "70px",
                  margin: "10px",
                }}
                type="button"
              >
                DAILY DEPARTURES
              </button>
              <button
                className="hover:bg-transparent"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                  ${button}
      )`,
                  backgroundPosition: "center center",
                  height: "70px",
                  margin: "10px",
                }}
                type="button"
              >
                NO HAPPY - FULL REFUND
              </button>
            </div>
            <div className="mt-4">
              <p>
                The 3 Days Epic Ha giang Loop Tour with easy rider organized by
                <b>Vietnam Cheers Hostel</b> is a must in Vietnam for any
                traveller. It is considered a highlight of South East Asia.
                Explore <b>Ma Pi Leng</b>, one of The Big Four Passes in
                Vietnam, through thousands of conical limestone peaks as well as
                deep and meandering valleys. Party dinner, waterfall and local
                le at authentic <b>Cheers Du Gia Homestay</b>. will be the
                unique experience also. This is designed for adventure-seekers —
                those who want to experience the biggest challenge Vietnam has
                to offer in a safe environment with our experienced easy riders.
              </p>
            </div>
            <div className="flex gap-2 mt-4 hoverButton">
              <Button name={"BOOK NOW"} cancelButton={false} />
              <Button name={"READ MORE"} cancelButton={true} />
            </div>
          </div>
          <div className="w-[40%] mobile__mapVietNam">
            <img width={"80%"} src={mapVietNam} alt="" />
          </div>
        </div>
        <div className="flex gap-5 md:flex-nowrap flex-wrap md:ml-10 ml-4 my-20 bg-white z-10">
          <div className="w-[60%]">
            <div className="text-orange-okhub w-[30%]">
              <h3>CHEERS</h3>
              <h1 className="text-[300%]">FAMILY</h1>
            </div>
          </div>
          <div>
            <CustomTabPanel data={data} />
          </div>
        </div>
        <div className="h-[37rem] ml-10 flex gap-4 sm:flex-nowrap md:flex-nowrap flex-wrap">
          <div className="text-orange-okhub w-[80%]">
            <h3>FAQ ABOUT</h3>
            <h1 className="text-[300%]">THE TRIPS</h1>
            <Button name={"BOOK NOW"} cancelButton={false} />
          </div>
          <div>
            <div>
              <div>
                <h2 className="text-[#B34B1E] text-3xl">NATURE</h2>
                <p className="text-[#727272]">
                  Browse our full service agency services and prices or contact
                  us for custom quotes.
                </p>
              </div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                  What is included or excluded?
                </p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                  How do I book and corfirm my trip?
                </p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <div>
                  <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                    What should I bring??
                  </p>
                  <p className="text-[#727272]">
                    Blown away by our Tanzania safari, I never expected it to be
                    that good — it totally exceeded mytations and was all hassle
                    free. Our guide was absolutely amazing too. Have re-booked.
                  </p>
                </div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                  Travel insurance?
                </p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile__includesMain">
            <div>
              <h2 className="text-black text-3xl">JOURNEY</h2>
              <p className="text-[#727272]">
                Browse our full service agency services and prices or contact us
                for custom quotes.
              </p>
            </div>
            <div>
              <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                What is included or excluded?
              </p>
              <p className="text-[#727272]">
                Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded mytations and was all hassle
                free. Our guide was absolutely amazing too. Have re-booked.
              </p>
            </div>
            <div>
              <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                How do I book and corfirm my trip?
              </p>
              <p className="text-[#727272]">
                Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded mytations and was all hassle
                free. Our guide was absolutely amazing too. Have re-booked.
              </p>
            </div>
            <div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                  What should I bring??
                </p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">
                Travel insurance?
              </p>
              <p className="text-[#727272]">
                Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded mytations and was all hassle
                free. Our guide was absolutely amazing too. Have re-booked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePages;
