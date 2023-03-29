import React from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { BsFillTrashFill, } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import shop1 from "../asstes/images/shop1.jpg";
import shop4 from "../asstes/images/shop4.png";
import shop6 from "../asstes/images/shop6.jpg";
export default function Cart() {
  return (
    <>
      <HeaderBottamSection />
      <div className="cart-main">
        <div class="container">
          <h2 className="cart-text mb-5">Shopping Cart</h2>
          <div class="row">
            <aside class="col-lg-8">
              <div class="card">
                <div class="table-responsive">
                  <table class="table table-borderless table-shopping-cart">
                    <thead class="text-muted">
                      <tr class="small text-uppercase">
                        <th scope="col" width="350">
                          Product
                        </th>
                        <th scope="col" width="150">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>

                        <th scope="col" width="100">
                          Subtotal
                        </th>
                        <th scope="col" width="50" class="cart-delete-1">
                          <BsFillTrashFill />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <figure class="itemside align-items-center">
                            <div class="aside">
                              <img src={shop4} class="img-sm" alt="cart" />
                            </div>
                            <figcaption class="info">
                              {" "}
                              <a
                                href="#"
                                class="title text-dark"
                                data-abc="true"
                              >
                                Tshirt with round nect
                              </a>
                              <p class="text-muted small">
                                SIZE: L <br /> Brand: MAXTRA
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="1[qty]"
                            class="text-center cart"
                            value="2"
                          />
                        </td>
                        <td>
                          <div class="price-wrap">
                            <p class="price">$40.00</p>{" "}
                          </div>
                        </td>
                        <td>
                          <div class="price-subtile">$50.00</div>
                        </td>

                        <td class="cart-delete">
                          <i>
                            <BsFillTrashFill />
                          </i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure class="itemside align-items-center">
                            <div class="aside">
                              <img src={shop6} class="img-sm" alt="cart" />
                            </div>
                            <figcaption class="info">
                              {" "}
                              <a
                                href="#"
                                class="title text-dark"
                                data-abc="true"
                              >
                                Flower Formal T-shirt
                              </a>
                              <p class="text-muted small">
                                SIZE: L <br /> Brand: ADDA{" "}
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="1[qty]"
                            class="text-center cart"
                            value="1"
                          />
                        </td>
                        <td>
                          <div class="price-wrap">
                            <p class="price">$40.00</p>{" "}
                          </div>
                        </td>
                        <td>
                          <div class="price-subtile">$50.00</div>
                        </td>
                        <td class="cart-delete">
                          <i>
                            <BsFillTrashFill />
                          </i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure class="itemside align-items-center">
                            <div class="aside">
                              <img src={shop1} class="img-sm" alt="cart" />
                            </div>
                            <figcaption class="info">
                              {" "}
                              <a
                                href="#"
                                class="title text-dark"
                                data-abc="true"
                              >
                                Printed White Tshirt
                              </a>
                              <p class="small text-muted">
                                SIZE:M <br /> Brand: Cantabil
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="1[qty]"
                            class="text-center cart"
                            value="1"
                          />
                        </td>
                        <td>
                          <div class="price-wrap">
                            {" "}
                            <p class="price">$40.00</p>{" "}
                          </div>
                        </td>
                        <td>
                          <div class="price-subtile">$40.00</div>
                        </td>
                        <td class="cart-delete">
                          <i>
                            <BsFillTrashFill />
                          </i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row mt-4 nee">
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="countinew-shpnig">
                    <NavLink className="countinew-empty ceconu">
                      Empty Cart
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="countinew-shpnig">
                    <NavLink   to="/shop"className="countinew-empty county">
                        
                    <i>  <FaShare/></i>Continue Shopping
                    </NavLink>
                  </div>
                </div>
              </div>
            </aside>

            <aside class="col-lg-4">
              <div class="card">
                <div className="total-shping-cart">
                  <h5> CART TOTALS</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td className="cart-total-text">Total w/o Tax</td>
                        <td class="text-right total-new-tt">$847.46</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Product Tax</td>
                        <td class="text-right total-new-tt">$152.54</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Total</td>
                        <td class="text-right total-new-tt">$1,000.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Order Tax</td>
                        <td class="text-right total-new-tt">0.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Shipping *</td>
                        <td class="text-right total-new-tt">0.00</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="grand-tut-t1">
                    <h6>
                      Grand Total
                      <span>$1,000.00</span>
                    </h6>
                  </div>
                  <div className="checkout">
                    <NavLink to="/Checkout"className="block">Checkout</NavLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
