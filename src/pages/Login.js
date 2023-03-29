import React, { useState, useEffect, useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import scarner from "../asstes/images/scarner.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


function Login() {
  const [value, setValue] = useState("");
  
function handleSubmit(values) {
  axios.post(`https://app.soundchatradio.com:3000/api/v1/auth/signin`,{
    "email":values.email,
    "password":values.password
  })
    .then(response => {
      console.log(response.data)
      // localStorage.setItem("token", JSON.stringify(response.data.token));
    })
    .catch(error => {
      console.log(error.response.data)
    })
    
  };
 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(/^\S*$/, "Empty Whitespace Not Allowed")
        .required("Required!"),

      password: Yup.string()
        .trim()
        .ensure()
        .min(6, "Minimum 6 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      // console.log(values)
      handleSubmit(values)
       formik.resetForm();
      //  alert(JSON.stringify(values, null, 2));
    },
  });

  // password shoe hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );
  return (
    <div className="login">
      <div class="container-fluid">
        <div class="row main-content  text-center">
          <div class="col-md-5 text-center company__info">
            <span class="company__logo">
              <img src={scarner} alt="scarner" />
            </span>
          </div>
          <div class="col-md-7 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="login-text">
                <h2 class="hr-lines">Sign In</h2>
              </div>
              <div class="row">
                <form class="form-group" onSubmit={formik.handleSubmit}>
                  <div class="row">
                    <div className="login-demo">
                      <lable className="login-lable">Username/Email</lable>
                      <span className="login-user-demo">
                        <FaUserAlt />
                      </span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        class="form__input"
                      />
                      {formik.errors.email && formik.touched.email && (
                        <p className="errormessage">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div className="login-demo">
                      <lable className="login-lable">password</lable>
                      <span className="login-user-demo">
                        <BsFillLockFill />
                      </span>
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        class="form__input"
                        autoComplete="off"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <span className="password-1">
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                      </span>
                      {formik.errors.password && formik.touched.password && (
                        <p className="errormessage">{formik.errors.password}</p>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="rember">
                        <input
                          type="checkbox"
                          name="remember_me"
                          id="remember_me"
                          class=""
                        />
                        <label for="remember_me">Remember Me!</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="forgot">
                        <NavLink>Forgot Password</NavLink>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <button type="submit" className="login-from-btn">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div class="row">
                <div className="dont-here">
                  <p>
                    Don't have an account?
                    <NavLink to="/Register" className="dont-here-1">
                      Sign Up
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
