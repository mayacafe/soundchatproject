import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import video from "../../asstes/video/production ID_5156816.mp4";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";
export default function HeaderTopSection() {
  return (
    <div className="header-top">
      <div className="header-top-wrapper d-flex">
        <div className="header-section-one">
          <div className="video-section">
            <video className="video-div" autoPlay={true} loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="header-section-tow">
          <div className="d-flex right-div-section">
            <div className="logo-soundchat">
              <img
                src="https://soundchatradio.com/wp-content/uploads/2018/10/logo-soundchat-radioSmall.png"
                alt=""
              />
            </div>
            <div className="logo-text-heading">
              <h6 className="div-h6">The Moisy Soundchat</h6>
              <p> soundchat</p>
              <h6 className="div-h6">I Need You Back</h6>
              <div className="span-div-icon">
                <span>
                  <FaStepBackward />
                </span>
                &nbsp; &nbsp;
                <span className="icon-div-span">
                  <ImPlay2 />
                </span>
                &nbsp; &nbsp;
                <span>
                  <FaStepForward />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
