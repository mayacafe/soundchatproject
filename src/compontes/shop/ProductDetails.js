import React, { useState, useEffect } from "react";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import shop4 from "../../asstes/images/shop4.png";
import shop5 from "../../asstes/images/shop5.jpg";
import shop6 from "../../asstes/images/shop6.jpg";
import { BsCart3, BsHeart, BsEye } from "react-icons/bs";
import shop3 from "../../asstes/images/shop3.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function ProductDetails() {
  const data = useLocation();
  const [RelatedVideo, setRelatedVideo] = useState([]);

  const FileArray = [];
  useEffect(() => {
    setRelatedVideo(data.state.related);
  }, [data]);

  for (let i = 0; i < RelatedVideo.length; i++) {
    console.log(RelatedVideo[i]);
    FileArray.push(RelatedVideo[i]);
  }

  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter - 1);
  };
  const handleClick2 = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <HeaderBottamSection />
      <div className="store-shoppiner">
        <div className="container">
          <Row>
            <Col sm={12} md={5} lg={5}>
              <div className="shop-i">
                <img
                  src={
                    "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                    FileArray.image
                  }
                  alt="img-error"
                />
              </div>
            </Col>
            <Col sm={12} md={7} lg={7}>
              <div class="product-dtl">
                <div class="product-info">
                  <div class="product-name">Variable Product</div>
                  <div class="reviews-counter">
                    <div className="rating">
                      <ul>
                        <li className="text-warning">
                          <BsFillStarFill />
                        </li>
                        <li className="text-warning">
                          <BsFillStarFill />
                        </li>
                        <li className="text-warning">
                          <BsFillStarFill />
                        </li>
                        <li>
                          <BsStar />
                        </li>
                        <li>
                          <BsStar />
                        </li>
                      </ul>
                      <span>3 Reviews</span>
                    </div>
                  </div>
                  <div class="product-price-discount">
                    <span>${FileArray.Price}</span>
                    <span class="line-through">$29.00</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div class="product-variation product-size-variation">
                      <label class="product-label-text">Size:</label>

                      <ul class="range-variant">
                        <li>xs</li>
                        <li>s</li>
                        <li>m</li>
                        <li>l</li>
                        <li>xl</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="product-variation product-size-variation">
                      <label class="product-label-text">Color:</label>

                      <ul class="range-variant">
                        <li className="bg-primary"></li>
                        <li className="bg-danger"></li>
                        <li className="bg-dark"></li>
                        <li className="bg-warning"></li>
                        <li className="bg-success"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="product-count">
                  <label for="size">Quantity:</label>

                  <form action="#" class="display-flex mt-3">
                    <div class="qtyminus" onClick={handleClick1}>
                      -
                    </div>
                    <div className="qnt">{counter}</div>
                    <div class="qtyplus" onClick={handleClick2}>
                      +
                    </div>
                  </form>
                  <a href="#" class="round-black-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <div className="store-tabs">
                <Tabs
                  defaultActiveKey="Description"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Description" title="Description">
                    <div className="store-description">
                      <p>
                        Urbano Fashion is a young and bold fashion brand, which
                        brings to you the latest trends in men's fashion. We
                        aspire to epitomize and bring the right balance between
                        style and comfort in our products. In today's fast paced
                        world, our endeavor is to innovate and differentiate our
                        product line to cater to the trend-setting generation.
                        Keeping our customer's happiness as our primary goal, we
                        are ever striving to launch unique styles and adding
                        value to India's fashion conscious wardrobes. Select
                        from our wide fashionable range of Jeans, T-Shirts,
                        Shirts, Trousers, Chinos, Sweatshirts, Jackets and more,
                        and be rest assured to have a smile on your face, look
                        good and feel good.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="Shipping" title="Additional information">
                    <div className="store-description">
                      <h4>Additional information</h4>
                      <p>
                        We deliver to over 100 countries around the world. For
                        full details of the delivery options we offer, please
                        view our Delivery information We hope you’ll love every
                        purchase, but if you ever need to return an item you can
                        do so within a month of receipt. For full details of how
                        to make a return, please view our Returns information
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="Reviews" title="Reviews">
                    <div className="store-description">
                      <div className="row">
                        <div class="col-sm-12 col-md-12 ">
                          <h4>Reviews</h4>
                          <p>There are no reviews yet.</p>
                          <div className="rating">
                            <ul>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsStar />
                              </li>
                              <li>
                                <BsStar />
                              </li>
                            </ul>
                            <h5 className="mt-3">Your Rating</h5>
                          </div>

                          <form class="shop-form-reviews" role="form">
                            <div className="row">
                              <div class="col-sm-12 col-md-6 ">
                                <label class="form-control-1-lable">
                                  Enter Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control-1"
                                  id="name"
                                  name="name"
                                  value=""
                                  required
                                />
                              </div>

                              <div class="col-sm-12 col-md-6 ">
                                <label class="form-control-1-lable">
                                  Enter Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control-1"
                                  id="email"
                                  name="email"
                                  value=""
                                  required
                                />
                              </div>
                              <div class="col-sm-12 col-md-12 ">
                                <label class="form-control-1-lable">
                                  Enter Message
                                </label>
                                <textarea
                                  class="form-control-1"
                                  rows="4"
                                  name="message"
                                  required
                                ></textarea>
                              </div>
                              <div class="col-sm-12 col-md-6 ">
                                <button id="submit" type="submit" value="SEND">
                                  submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <section class="section-products">
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="header">
                    <h4> Related Products</h4>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6 col-md-6 col-lg-4 col-xl-3">
                  <div id="product-3" class="single-product">
                    <div class="part-1">
                      <img src={shop3} alt="" />
                      <ul>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsCart3 />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsHeart />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsEye />
                            </i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">Here Product Title</h3>
                      <h4 class="product-old-price">$79.99</h4>
                      <h4 class="product-price">$49.99</h4>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" class="single-product">
                    <div class="part-1">
                      <img src={shop4} alt="" />
                      <span class="new">new</span>
                      <ul>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsCart3 />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsHeart />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsEye />
                            </i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">Here Product Title</h3>
                      <h4 class="product-price">$49.99</h4>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-6 col-lg-4 col-xl-3">
                  <div id="product-1" class="single-product">
                    <div class="part-1">
                      <img src={shop5} alt="" />
                      <ul>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsCart3 />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsHeart />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsEye />
                            </i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">Here Product Title</h3>
                      <h4 class="product-old-price">$79.99</h4>
                      <h4 class="product-price">$49.99</h4>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-6 col-lg-4 col-xl-3">
                  <div id="product-2" class="single-product">
                    <div class="part-1">
                      <img src={shop6} alt="" />
                      <span class="discount">15% off</span>
                      <ul>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsCart3 />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsHeart />
                            </i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/#">
                            <i>
                              <BsEye />
                            </i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">Here Product Title</h3>
                      <h4 class="product-price">$49.99</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Row>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
export default ProductDetails;
