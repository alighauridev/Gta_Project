import React, { useEffect, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { useDispatch, useSelector } from "react-redux";

import { RxCross2 } from "react-icons/rx";
import { Backdrop } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BackdropStyle } from "../../assets/data";
import { Input, PasswordInput, SubmitInput } from "../Controls/Inputs/Inputs";
import "./User.scss";
import MetaData from "../Layouts/MetaData";
import { clearError, login } from "../../Redux/actions/userAction";
import { toast } from "react-toastify";
import BackdropLoading from "../Layouts/BackdropLoading";
const Login = () => {
  const navigate = useNavigate();
  const disptch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);
  const { loading, error, isAutenticated } = useSelector((state) => state.user);

  //LoginSubmit

  const loginSubmit = (e) => {
    if (!email || !password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")) {
      return setInputError(true);
    }

    if (
      email.indexOf("@") === -1 ||
      password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "").length < 8
    ) {
      return setInputError(true);
    }
    disptch(login(email, password));
  };

  //CloseFormHandler

  const closeHandler = () => {
    navigate("/");
  };
  useEffect(() => {
    if (isAutenticated) {
      toast.success("Login Successfully");
      navigate("/");
    }
    if (error) {
      toast.error(error);
      disptch(clearError());
    }
  }, [error, isAutenticated, disptch, toast]);

  useEffect(() => {}, []);

  return (
    <>
      <MetaData title={"Login"} />
      <div style={BackdropStyle}>
        <BackdropLoading open={loading} />
        <section id="login">
          <div className="container">
            <div className="cross_btn" onClick={closeHandler}>
              <RxCross2 />
            </div>
            <div className="heading">
              <h1>Login</h1>
            </div>
            <div className="login_form">
              {/* Email Input */}
              <Input
                inputTitle={"Email"}
                type={"email"}
                placeholder="Enter Your Email"
                value={email}
                inputIcon={<AlternateEmailIcon />}
                name={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                inputError={
                  inputError
                    ? !email
                      ? "Please Enter Your Email"
                      : email.indexOf("@") === -1
                      ? "Please include an @ in email address"
                      : null
                    : null
                }
              />

              {/* Password Input */}
              <PasswordInput
                inputTitle={"Password"}
                type={"password"}
                placeholder="Enter Yor Password"
                inputIcon={<HttpsOutlinedIcon />}
                name={"password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                inputError={
                  inputError
                    ? !password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                      ? "Please Enter Your Password"
                      : password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                          .length < 8 &&
                        "Password should have more than 8 characters "
                    : null
                }
                Click={true}
              />

              <SubmitInput
                value={"Login"}
                formSubmit={loginSubmit}
                loading={loading}
              />
            </div>

            <p className="account_btn">
              Don't have account?
              <Link to={"/signUp"}>Sign Up</Link>
            </p>
            <div className="forgot_btn">
              Forgot your password?
              <Link to={"/password/reset"}>Reset it</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
