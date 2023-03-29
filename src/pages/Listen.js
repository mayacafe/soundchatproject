import React from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import imgone from "../asstes/images/shop4.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import podcast1 from "../asstes/images/shop5.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiPlay } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsFillSquareFill } from "react-icons/bs";
import showrecap from "../asstes/images/shop6.jpg";
import showrecap2 from "../asstes/images/shop3.jpg";
import showrecap3 from "../asstes/images/shop1.jpg";
import showrecap4 from "../asstes/images/adv2.jpg";
import showrecap5 from "../asstes/images/Sherry.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
export default function ListenSection() {
  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="listen-section-div">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-new">
                <div className="video-slider">
                  <img src={imgone} alt="" />
                </div>
                <div className="recap-video-heading ">
                  <h1 className="recap-video-h1">
                    NEW ARRIVAL FOR THE WINTER SEASON
                  </h1>

                  <div className="video-lis-btn-div">
                    <button className="btn-lis"> SHOP NOW !</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="listen-div">
            <Row>
              <Col sm={12} md={6} lg={3}>
                <div className="listen-img-div">
                  <img src={podcast1} alt="" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={7}>
                <div className="right-section-listen">
                  <h6>Mawnin Vibez Show</h6>

                  <p>SoundChat Radio</p>
                  <div className="listen-icon-div">
                    <span className="listion-icon ">
                      <BsFillSquareFill />
                    </span>
                    <span className="listion-icon-li ">
                      <BiPlay />
                    </span>
                    <span className="listion-icon icon-lis lis-font">
                      <BsFillVolumeUpFill />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div> */}

          <div className="heading-section-lis">
            <h5>Upcoming Shows</h5>
          </div>
          <OwlCarousel
            items={6}
            className="owl-carousel owl-theme "
            // loop
            nav
            autoplay={true}
            dots={false}
            touchDrag={true}
            lazyLoad={true}
            responsive={state.responsive} // add this line
            margin={20}
          >
            <div className="img-recap">
              <img src={showrecap} alt="" />
            </div>
            <div className="img-recap">
              <img src={showrecap2} alt="" />
            </div>
            <div className="img-recap">
              <img src={showrecap5} alt="" />
            </div>
            <div className="img-recap">
              <img src={showrecap3} alt="" />
            </div>
            <div className="img-recap">
              <img src={showrecap4} alt="" />
            </div>
            <div className="img-recap">
              <img src={showrecap5} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
