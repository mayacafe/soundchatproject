import React from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";

export default function Checkout() {
  return (
    <>
      <HeaderBottamSection />
      <div className="Checout-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class=" checkout-bg-default">
                <form>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <lable className="billing-checkout">Name*</lable>
                        <input type="text" name="Name" class="form__input-1" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Email*</lable>
                        <input type="text" name="Email" class="form__input-1" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Phone*</lable>
                        <input type="text" name="Phone" class="form__input-1" />
                      </div>
                    </div>
                    <h4 class="my-4">Billing Address</h4>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Postal Code *
                        </lable>
                        <input
                          type="text"
                          name="Postal"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">State *</lable>
                        <input type="text" name="State" class="form__input-1" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Country *</lable>
                        <input
                          type="text"
                          name="Country"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">City *</lable>
                        <input type="text" name="City" class="form__input-1" />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 1 *
                        </lable>
                        <input
                          type="text"
                          name="Address1"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 2 *
                        </lable>
                        <input
                          type="text"
                          name="Address2"
                          class="form__input-1"
                        />
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-12">
                      <h5 class="my-4">Shipning Address</h5>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="checkbox bg pull-right">
                        <label>
                          <input
                            type="checkbox"
                            name="same"
                            value="1"
                            id="same_as_billing"
                          />
                          <span>Same as Billing Address </span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Postal Code *
                        </lable>
                        <input
                          type="text"
                          name="Postal"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">State *</lable>
                        <input type="text" name="State" class="form__input-1" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Country *</lable>
                        <input
                          type="text"
                          name="Country"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">City *</lable>
                        <input type="text" name="City" class="form__input-1" />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 1 *
                        </lable>
                        <input
                          type="text"
                          name="Address1"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 2 *
                        </lable>
                        <input
                          type="text"
                          name="Address2"
                          class="form__input-1"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className=" col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="checoutng-1">
              <div class="card mb-4">
                <div className="total-shping-cart">
                  <h5>PAYMENTS METHOD</h5>
                  <h6 className="Accepted-card">Accepted Cards</h6>
                  <div class="col-md-12 ">
                    <div className="form-group">
                      <lable className="billing-checkout">Card Number</lable>
                      <input type="text" name="Card" class="form__input-1" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div className="form-group-neety">
                      <lable className="billing-checkout">Month</lable>
                      <input type="text" name="Card" class="form__input-1 " />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div className="form-group">
                      <lable className="billing-checkout">Year</lable>
                      <input type="text" name="Card" class="form__input-1" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div className="form-group">
                      <lable className="billing-checkout">CVV</lable>
                      <input type="text" name="Card" class="form__input-1" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="card">
                <div className="total-shping-cart">
                  <h5> TOTALS</h5>
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
                        <td class="text-right total-new-tt">TTD $539.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Order Tax</td>
                        <td class="text-right total-new-tt">0.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Shipping *</td>
                        <td class="text-right total-new-tt">TTD $50.00</td>
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
                    <button type="submit" className="block">
                      {" "}
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};
