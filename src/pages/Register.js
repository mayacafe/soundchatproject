import React, { useState, useEffect, useRef } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import scarner from "../asstes/images/scarner.jpeg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";


function Register() {
  // mobile number validation
  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress)

  function handleSubmit(values) {
    trackPromise(
  axios.post(`https://app.soundchatradio.com:3000/api/v1/auth/signup`,{
    "email":values.email,
    "password":values.password,
    "firstname":values.firstname ,
    "lastname":values.lastname,
    "phone":values.phone,
    "confirm_password":values.confirm_password,
  

  })
    .then(response => {
      console.log(response.data)
      showToastMessage(response.data.message);
      // localStorage.setItem("token", JSON.stringify(response.data.token));
    })
    .catch(error => {
      console.log(error.response.data)
    })
    )
    
  };
 
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid First Name")
        .required("Required!"),

      lastname: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid Last Name")
        .required("Required!"),

      email: Yup.string()
        .trim()
        .ensure()
        .email("Invalid email format")
        .matches(/^\S*$/, "Email Not Valide")
        .required("Required!"),

      phone: Yup.string()
        .matches(phoneRegex, "Invalid phone")
        .required("Phone is required"),
      password: Yup.string()
        .trim()
        .ensure()
        .min(8, "Minimum 8 characters")
        .required("Required!"),

      confirm_password: Yup.string()
        .trim()
        .ensure()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      formik.resetForm();
      handleSubmit(values)
      //alert(JSON.stringify(values, null, 2));
    },
  });
  // password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const eye1 = passwordShown1 ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );

  return (
    <div className="register">
      <div class="container-fluid">
        <div class="row main-content register text-center">
          <div class="col-md-5 text-center company__info-register">
            <span class="company__logo register">
              <img src={scarner} alt="scarner" />
            </span>
          </div>
          <div class="col-md-7 col-xs-12 col-sm-12 login_form ">
            <div class="login-text">
              <h1 class="hr-lines1">Sign Up</h1>
              <p>Complete all fields below to create account</p>
            </div>
            <div class="row">
              <form class="form-group" onSubmit={formik.handleSubmit}>
                <div class="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type="text"
                        name="firstname"
                        class="form__input_register"
                        placeholder="Enter First Name"
                        autoComplete="off"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.firstname && formik.touched.firstname && (
                        <p className="errormessage">
                          {formik.errors.firstname}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type="text"
                        name="lastname"
                        class="form__input_register"
                        placeholder="Enter Last Name"
                        autoComplete="off"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.lastname && formik.touched.lastname && (
                        <p className="errormessage">{formik.errors.lastname}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type="email"
                        name="email"
                        class="form__input_register"
                        placeholder="Enter Email"
                        autoComplete="off"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <p className="errormessage">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type="text"
                        name="phone"
                        class="form__input_register"
                        placeholder="Enter Mobile Numer"
                        autoComplete="off"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.phone && formik.touched.phone && (
                        <p className="errormessage">{formik.errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        class="form__input_register"
                        placeholder="Enter Password"
                        autoComplete="off"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <span className="password">
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                      </span>
                      {formik.errors.password && formik.touched.password && (
                        <p className="errormessage">{formik.errors.password}</p>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-12">
                    <div className="login-demo">
                      <input
                        type={passwordShown1 ? "text" : "password"}
                        name="confirm_password"
                        id="confirm_password"
                        class="form__input_register"
                        placeholder="Enter Confirm Password"
                        autoComplete="off"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                      />
                      <span className="password">
                        <i onClick={togglePasswordVisiblity1}>{eye1}</i>
                      </span>
                      {formik.errors.confirm_password &&
                        formik.touched.confirm_password && (
                          <p className="errormessage">
                            {formik.errors.confirm_password}
                          </p>
                        )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="login-from-btn">
                      Sign Up
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
            <div class="row">
              <div className="dont-here">
                <p>
                  Already have an account?
                  <NavLink to="/Login" className="dont-here-1">
                    Sign In{" "}
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
