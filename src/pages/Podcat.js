import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots  } from "react-loader-spinner";
// import "../asstes/style.css";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import OwlCarousel from "react-owl-carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import copy1 from "../asstes/images/copy9.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

export default function Podcat() {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress)
  const [MondayPodcast, setMondayPodcast] = useState([]);
  const [ThusedayPodcast, setThusedayPodcast] = useState([]);
  const [WednesdayPodcast, setWednesdayPodcast] = useState([]);
  const [ThursdayPodcast, setThursdayPodcast] = useState([]);
  const [FridaydayPodcast, setFridaydayPodcast] = useState([]);
  const [SaturdayPodcast, setSaturdayPodcast] = useState([]);
  const [SundayPodcast, setSundaydayPodcast] = useState([]);
  useEffect(() => {
    trackPromise(
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listshowschedule`)
      .then((response) => {
        setMondayPodcast(response.data.data[6].shows);
        setThusedayPodcast(response.data.data[5].shows);
        setWednesdayPodcast(response.data.data[4].shows);
        setThursdayPodcast(response.data.data[3].shows);
        setFridaydayPodcast(response.data.data[2].shows);
        setSaturdayPodcast(response.data.data[1].shows);
        setSundaydayPodcast(response.data.data[0].shows);
      })
      .catch((error) => {
        console.log(error);
      })
  )
  }, []);

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      450: {
        items: 3,
      },
      767: {
        items: 4,
      },
      768: {
        items: 4,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 8,
      },
    }
  };
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="podcast">
          <div className="heading-h4-div">
            <h4>UPCOMING SHOWS</h4>
          </div>
          <OwlCarousel
            items={3}
            className="owl-carousel owl-theme "
            loop
            nav
            autoplay={true}
            dots={false}
            touchDrag={true}
            lazyLoad={true}
            responsive={state.responsive} // add this line
            margin={10}
          >
            <div className="podcast-div">
              <div className="podcast-img effect-image-1 radious-effect radius-effct-next">
                <img src={copy1} alt="" />
              </div>
              <div className="podcast-box">
                <h6>SoundChat Talk Show (Wednesday)</h6>
                <p className="div-podcast">Thursday</p>
                <p className="pera pera-podcast">04:00</p>
              </div>
            </div>
          </OwlCarousel>
          <div className="podcast-bottam">
            <div className="podcast-heading">
              <h4>FEATURED SHOWS </h4>
            </div>
            { (promiseInProgress === true) ?
               <div
               className="spinner"
               style={{
                 display: "flex",
                 justifyContent: "center",
                 alignIitems: "center",
               }}
             >
               <ThreeDots
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
             </div>
              :
            <>

            <Tabs
              defaultActiveKey="monday"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >

              <Tab eventKey="monday" title="Monday">
                <Row>
                  {MondayPodcast.map((mondaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    mondaydata.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{mondaydata.show_name}</h6>
                                <p>Monday</p>
                                <p>
                                  Live At : {mondaydata.show_start_date} -{" "}
                                  {mondaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>

              <Tab eventKey="thuseday" title="Thuseday">
                <Row>
                  {ThusedayPodcast.map((Thusedaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Thusedaydata.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Thusedaydata.show_name}</h6>
                                <p>Thuseday</p>
                                <p>
                                  Live At : {Thusedaydata.show_start_date} -
                                  {Thusedaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>

              <Tab eventKey="wednesday" title="Wednesday">
                <Row>
                  {WednesdayPodcast.map((Wednesdaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Wednesdaydata.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Wednesdaydata.show_name}</h6>
                                <p>Wednesday</p>
                                <p>
                                  Live At : {Wednesdaydata.show_start_date} -{" "}
                                  {Wednesdaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>

              <Tab eventKey="thursday" title="Thursday">
                <Row>
                  {ThursdayPodcast.map((Thursdaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Thursdaydata.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Thursdaydata.show_name}</h6>
                                <p>Thursday</p>
                                <p>
                                  Live At : {Thursdaydata.show_start_date} -{" "}
                                  {Thursdaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="friday" title="Friday">
                <Row>
                  {FridaydayPodcast.map((Fridaydaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Fridaydaydata.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Fridaydaydata.show_name}</h6>
                                <p>Friday</p>
                                <p>
                                  Live At : {Fridaydaydata.show_start_date} -{" "}
                                  {Fridaydaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="saturday" title="Saturday">
                <Row>
                  {SaturdayPodcast.map((Saturdaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Saturdaydata.show_image
                                  }
                                  alt="img-error"
                                />{" "}
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Saturdaydata.show_name}</h6>
                                <p>Saturday</p>
                                <p>
                                  Live At : {Saturdaydata.show_start_date} -{" "}
                                  {Saturdaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="sunday" title="Sunday">
                <Row>
                  {SundayPodcast.map((Sundaydata) => {
                    return (
                      <>
                        <Col xs={6} sm={6} md={6} lg={3}>
                          <div className="podcast-vo-div">
                            <div className="podcast-bo-div">
                              <div className="pod-img">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    Sundaydata.show_image
                                  }
                                  alt="img-error"
                                />{" "}
                              </div>
                              <div className="podcast-bo-box">
                                <h6>{Sundaydata.show_name}</h6>
                                <p>Sunday</p>
                                <p>
                                  Live At : {Sundaydata.show_start_date} -{" "}
                                  {Sundaydata.show_end_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Tab>
             
            </Tabs>
            </>}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
