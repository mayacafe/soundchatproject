import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import podcast1 from "../../asstes/images/download1.jpg";
import { NavLink } from "react-router-dom";
export default function SliderSection() {
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
              <h5>Live Podcast</h5>
              <NavLink to="/Podcat">
                <h6>View More</h6>
              </NavLink>
            </div>
          </div>

        <OwlCarousel
          items={6}
          className="owl-carousel owl-theme "
          loop
          nav
          autoplay={true}
          dots={false}
          touchDrag={true}
          lazyLoad={true}
          responsive={state.responsive} // add this line
          margin={20}
        >
          <NavLink to="/Podcat">
          <div className="live-podcast">
            <img src={podcast1} alt="auction" />
          </div>
          </NavLink>
        </OwlCarousel>
      </div>
    </section>
  );
}
