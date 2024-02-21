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
import CustomTabPanel from "../../components/Tab"
import "./home.css";
import Tour from "../../components/Tour";

const HomePages = () => {
  const data = [
    {id: 0, nameTabs: "Tourleader", component: <Tour images={[
      discover,
      teamWork,
      "" ,
    ]} />},
    {id: 1, nameTabs: "Speacialist", component: "test"},
    {id: 2, nameTabs: "Localhost", component: "test"},
    {id: 3, nameTabs: "Riderteam", component: "test"}
  ]
  return (
    <main className="relative">
      <div>
        <div className="relative h-[55rem]">
          <div className="text-center text-orange-okhub">
            <h3 className="text-[100%]">WELCOME TO</h3>
            <h1 className="text-[300%]">HA GIANG LOOP</h1>
            <h1 id="text_VietNam">Viet Nam</h1>
          </div>
          <div>
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
            <div className="absolute left-[25%] top-[35%]">
              <video
                className=" rounded-xl"
                width={"65%"}
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
        <div className="flex gap-20 ml-10">
          <div className="w-[50%]">
            <div className="text-orange-okhub w-[50%]">
              <h3>START WITH</h3>
              <h1 className="text-[300%]">HA GIANG CHEERS TOUR</h1>
            </div>
            <div className="w-[100%] grid grid-cols-2 gap-4 place-content-center text-white">
              <button
                className="hover:bg-transparent"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                  ${button}
      )`,
                  backgroundPosition: "center center",
                  height: "70px",
                  margin: '10px'
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
                  margin: '10px'
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
                  margin: '10px'
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
                  margin: '10px'
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
            <div className="flex gap-2 mt-4">
              <Button name={"BOOK NOW"} cancelButton={false} />
              <Button name={"READ MORE"} cancelButton={true} />
            </div>
          </div>
          <div className="w-[40%]">
            <img width={"80%"} src={mapVietNam} alt="" />
          </div>
        </div>
        <div className="flex gap-5 ml-10 my-20 bg-white z-10">
          <div className="w-[60%]">
            <div className="text-orange-okhub w-[30%]">
              <h3>CHEERS</h3>
              <h1 className="text-[300%]">FAMILY</h1>
            </div>
            {/* <div>
              <h3>H'MONG TEAM</h3>
              <p>
                Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded my expectations and was all
                hassle free. Our guide was absolutely amazing too. Have
                re-booked and cannot wait for next year! Blown away by our
                Tanzania safari, I never expected it to be that good — it
                totally exceeded my expectations and was all hassle free. Our
                guide was absolutely amazing too. Have re-booked and cannot wait
                for .Our guide was absolutely amazing too.
              </p>
            </div>
            <div>
              <p>
                <img src="" alt="" />
                <b>group size: </b>
                <span>15 members</span>
              </p>
              <p>
                <img src="" alt="" />
                <b>transport: </b>
                <span>Motorbike</span>
              </p>
              <p>
                <img src="" alt="" />
                <b>Trip completed: </b>
                <span>154 trips</span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button name="JOIN WITH US" cancelButton={false} />
              <Button name="CALL US" cancelButton={true} />
            </div> */}
          </div>
          <div>
            <CustomTabPanel data={data} />
            {/* <ul>
              <li>TOUR LEADER</li>
              <li>SPECIALLIST</li>
              <li>LOCAL HOST</li>
              <li>RIDER TEAM</li>
            </ul>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div> */}
          </div>
        </div>
        <div className="h-[37rem] ml-10 flex gap-4 sm:flex-nowrap flex-wrap">
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
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">What is included or excluded?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">How do I book and corfirm my trip?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <div>
                  <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">What should I bring??</p>
                  <p className="text-[#727272]">
                    Blown away by our Tanzania safari, I never expected it to be
                    that good — it totally exceeded mytations and was all hassle
                    free. Our guide was absolutely amazing too. Have re-booked.
                  </p>
                </div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">Travel insurance?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h2 className="text-black text-3xl">JOURNEY</h2>
                <p className="text-[#727272]">
                  Browse our full service agency services and prices or contact
                  us for custom quotes.
                </p>
              </div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">What is included or excluded?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">How do I book and corfirm my trip?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
              <div>
                <div>
                  <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">What should I bring??</p>
                  <p className="text-[#727272]">
                    Blown away by our Tanzania safari, I never expected it to be
                    that good — it totally exceeded mytations and was all hassle
                    free. Our guide was absolutely amazing too. Have re-booked.
                  </p>
                </div>
                <p className="text-[#B34B1E] text-xl border-b-2 border-black hover:border-[#B34B1E] my-2">Travel insurance?</p>
                <p className="text-[#727272]">
                  Blown away by our Tanzania safari, I never expected it to be
                  that good — it totally exceeded mytations and was all hassle
                  free. Our guide was absolutely amazing too. Have re-booked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePages;
