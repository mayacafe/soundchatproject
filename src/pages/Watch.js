import React from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
export default function Watch() {
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="watch-section">
          <div className="container">
            <Row>
              <Col xs={12} md={6} lg={12}>
                <div className="video-soundchat">
                  <div className="watch-set">
                    <ReactPlayer
                      className="react-player-setc"
                      url="https://youtu.be/2lW6LL7P0cY"
                      width="100%"
                      height="500px"
                      volume="1"
                      auto="true"
                      playing="true"
                      controls="true"
                    />
                  </div>
                </div>
              </Col>
              {/* <Col xs={12} md={6} lg={3}>
                <div className="chat-user watch-user">
                  <button className="btn-div-chat-login">Login to chat</button>
                  <br /> <br />
                  <p className="div-or">or</p>
                  <form>
                    <div className="form-group has-search">
                      <span className="user-icon-div">
                        <HiUser />
                      </span>
                      <input type="text" placeholder="Enter Guest Us..."/>
                    </div>
                  </form>
                  <br />
                  <button className="btn-div-chat-login">Login as Guest</button>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
