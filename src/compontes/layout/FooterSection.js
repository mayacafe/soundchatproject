import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imge1 from "../../asstes/images/Skype_Picture_2023_02_23T08_57_03_880Z.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { NavLink } from "react-router-dom";
import img1 from "../../asstes/images/Google_Play_Store_badge_EN.svg.webp";
import img2 from "../../asstes/images/Download_on_the_App_Store_Badge.svg.webp";

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-top bg_img">
        <div className="container-fluid">
          <div className="footer-section-top">
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                <div className="logo-footer">
                  <img
                    src="https://soundchatradio.com/wp-content/uploads/2018/10/logo-soundchat-radioSmall.png"
                    alt="err"
                  />
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                <div className="footer-widget widget-links">
                  <h5 className="footer-title ">REQUEST LINES</h5>
                  <ul className="links-list margin-div">
                    <li className="footer-same-one">
                      <div>
                        <h5 className="ml footer-one">
                          USA
                          <span className="ml footer-two">(718) 554-8598</span>
                        </h5>
                      </div>
                    </li>
                    <li className="footer-same-one">
                      <div>
                        <h5 className="ml footer-one">
                          UK
                          <span className="ml footer-two">44 208-068-0507</span>
                        </h5>
                      </div>
                    </li>
                    <li className="footer-same-one">
                      <div>
                        <h5 className="ml footer-one">
                          Canada
                          <span className="ml footer-two">(647) 484-7826</span>
                        </h5>
                      </div>
                    </li>
                    <li className="footer-same-one">
                      <div>
                        <h5 className="ml footer-one">
                          Listen By Phone
                          <span className="ml footer-two">(720) 721-1428</span>
                        </h5>
                      </div>
                    </li>
                    <li className="footer-same-one">
                      <div>
                        <h5 className="ml footer-one">
                          Whatsapp
                          <span className="ml footer-two">(347) 757-9865</span>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={2}>
                <div className="footer-widget widget-links">
                  <h5 className="title">FOLLOW US</h5>
                  <ul className=" icon-div-footer ">
                    <li>
                      <span className="icon-footer-icon">
                        {" "}
                        <ImFacebook />
                      </span>
                      <div className="footer-div-icon">Facebook</div>
                    </li>
                    <li>
                      <span className="icon-footer-icon">
                        {" "}
                        <ImInstagram />
                      </span>
                      <div className="footer-div-icon">Instagram</div>
                    </li>
                    <li>
                      <span className="icon-footer-icon">
                        <ImTwitter />
                      </span>
                      <div className="footer-div-icon">Twitter</div>
                    </li>
                    <li>
                      <span className="icon-footer-icon">
                        <ImYoutube />
                      </span>
                      <div className="footer-div-icon">Youtube</div>
                    </li>
                    <li>
                      <span className="icon-footer-icon">
                        <ImWhatsapp />
                      </span>
                      <div className="footer-div-icon">Whatsapp</div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                <div className="footer-widget widget-links footer-download">
                  <h5 className="title">DOWNLOAD APP</h5>
                  <div className="d-flex">
                    <div className="sc-div">
                      <img src={imge1} alt="" />
                    </div>
                    <div className="button-div">
                      <img src={img1} alt="" />
                      &nbsp; &nbsp;
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="footer-bottom-section">
            <Row>
              <Col xs={12} sm={12} lg={12}>
                <div className="footer-pra">
                  <p>
                    © 2022 Irish & Chin Ltd. | All rights reserved. I Designed
                    by Broadlink.
                  </p>
                  <NavLink to="/Contact">
                    <span className="footer-span">
                      <ArrowForwardIosIcon /> CONTACT US
                    </span>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  );
}
