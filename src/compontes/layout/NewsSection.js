import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img3 from "../../asstes/images/podcast-1.webp";
import img4 from "../../asstes/images/adv2.jpg";
import FbGridImages1 from "../FbImageLibrary1";
import { FiArrowRight } from "react-icons/fi";
import imgnews from "../../asstes/images/newsimg.jpg";
import { NavLink } from "react-router-dom";

export default function NewsSection() {
  return (
    <section className="bg-color">
      <div className="product-section">
        <div className="container-fluid">
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <div className="head">
                <h2>Latest Stories</h2>
              </div>

              <div>
                <Swiper
               
                  spaceBetween={8}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  slidesPerView={3}
                  autoplay={{
                    clickable: false,
                  }}
                  // className="mySwiper"
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },

                    768: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },

                    575: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                  }}
               

                >
                  <SwiperSlide>
                    <div className="img-news-section">
                      <img src={img3} alt="" />
                      <div className="day-div">
                        <p>Sat, Feb 25, 2023</p>
                      </div>
                      <div class="content">
                        <p>Bless up Jamaica's newest Reggae Grammy Winner...</p>
                        <h6 className="div-news-h6">View Story</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="news-video-section img-news-section">
                      <ReactPlayer
                        url="https://vimeo.com/243556536"
                        width="100%"
                        height="250px"
                        playing
                        playIcon={""}
                        light={imgnews}
                      />
                      <div className="day-div">
                        <p>Sat, Feb 25, 2023</p>
                      </div>
                      <div class="content">
                        <p>
                          A glimpse at the revelry now Taking place at
                          trinidad's...
                        </p>
                        <h6 className="div-news-h6">View Story</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-news-section">
                    <div className="news-gallery">
                      <FbGridImages1 />
                      <div className="day-div">
                        <p>Sat, Feb 25, 2023</p>
                      </div>
                      <div class="content">
                        <p>
                          A glimpse at the revelry now Taking place at
                          trinidad's...
                        </p>
                        <h6 className="div-news-h6">View Story</h6>
                      </div>
                    </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="icon-news-div">
                      <span>
                        <FiArrowRight />
                      </span>
                      &nbsp; More Stories
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="head ">
                <h2>SoundChat Shop</h2>
              </div>
              <div class="adv-div">
                <img src={img4} alt="" />
                <div class="middle">
                  <NavLink to="/Shop">Shop Now</NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
