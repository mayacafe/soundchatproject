import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import img1 from "../../asstes/images/interview4.jpg";
// import img2 from "../../asstes/images/interview2.jpg";
// import img3 from "../../asstes/images/interview5.jpg";
import int01 from "../../asstes/images/podcast7.png";
import int02 from "../../asstes/images/podcast6.png";
import int03 from "../../asstes/images/podcast5.png";
import int04 from "../../asstes/images/podcast4.png";
import int05 from "../../asstes/images/podcast3.png";
import int06 from "../../asstes/images/podcast2.png";
import { NavLink } from "react-router-dom";
export default function InterviewSection() {
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
    <section className="bg-color">
      <div className="slider-section">
        <div className="heading-section-h5">
          <div className="news-heading ">
            <h5>Interview Section</h5>
            <NavLink to="/Interview">
              <h6>View More</h6>
            </NavLink>
          </div>
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
          responsive={state.responsive}
          margin={20}
        >
          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int01} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>
          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int02} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>

          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int03} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>
          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int04} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>
          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int05} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>

          <div className="interview-img-section-55 box">
            <div className="img-recap">
              <NavLink to="/LatestRecapTVShowsVideo">
                <img src={int06} alt="" />
              </NavLink>
              <div className="reacp-contnent-home">
                <p className="recap-pra">T.O.K shares their journey</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
