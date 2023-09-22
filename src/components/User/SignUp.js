import React, { useEffect, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { RxCross2, RxFace, RxAvatar } from "react-icons/rx";
import { Backdrop } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { BackdropStyle } from "../../assets/data";
import {
  Input,
  PasswordInput,
  SubmitInput,
  UploadImageInput,
} from "../Controls/Inputs/Inputs";
import SampleAvatar from "../../assets/images/Avatar-logout.png";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearError, register } from "../../Redux/actions/userAction";
import MetaData from "../Layouts/MetaData";
import BackdropLoading from "../Layouts/BackdropLoading";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState(false);
  const [avatar, setAvatar] = useState();
  const [inputMessage, setInputMessage] = useState();
  const [avatarPreview, setAvatarPreview] = useState(SampleAvatar);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const { loading, error, isAutenticated } = useSelector((state) => state.user);

  //RegisterSubmit

  const registerSubmit = (e) => {
    if (
      !name.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "") ||
      !email.trim() ||
      !password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "") ||
      !avatar
    ) {
      console.log("null");
      return setInputError(true);
    } else if (
      name.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "").length < 8 ||
      email.indexOf("@") === -1 ||
      password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "").length < 8
    ) {
      return setInputError(true);
    }

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    console.log(myForm);
    dispatch(register(myForm));
  };

  //CloseFormHandler

  const closeHandler = () => {
    navigate("/");
  };

  //RegisterDataHanadler

  const registerDataHanadler = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      console.log("avatar");
      reader.onload = (el) => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
          console.log(el);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    // if (
    //   error === "Users validation failed: email: Please Enter a Valid Emial"
    // ) {
    //   toast.error("Please Enter a Valid Email");
    //   dispatch(clearError());
    // } else {
    //   toast.error(error);
    //   dispatch(clearError());
    // }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, toast]);

  useEffect(() => {
    if (isAutenticated) {
      toast.success("User Create Successfully");
      navigate("/");
    }
  }, [dispatch, toast, isAutenticated]);

  // console.log(name, email, password);
  return (
    <>
      <MetaData title={"SignUp"} />
      <div style={BackdropStyle}>
        <BackdropLoading open={loading} />
        <section id="signUp">
          <div className="container">
            <div className="cross_btn" onClick={closeHandler}>
              <RxCross2 />
            </div>
            <div className="heading">
              <h1>Sign Up</h1>
            </div>
            <div className="signUp_form" encType="multipart/form-data">
              {/* Input Name */}

              <Input
                inputTitle={"Name"}
                type={"text"}
                placeholder={"Enter Yor Name"}
                inputIcon={<RxAvatar />}
                value={name}
                name={"name"}
                onChange={registerDataHanadler}
                inputError={
                  inputError
                    ? !name.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                      ? "Please Enter Your Name"
                      : name.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                          .length < 4
                      ? "Name should have more than 4 characters"
                      : null
                    : null
                }
              />

              {/* Email Input */}

              <Input
                inputTitle={"Email"}
                type={"email"}
                placeholder="Enter Your Email"
                inputIcon={<AlternateEmailIcon />}
                value={email}
                name={"email"}
                onChange={registerDataHanadler}
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
                value={password}
                name={"password"}
                onChange={registerDataHanadler}
                inputError={
                  inputError
                    ? !password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                      ? "Please Enter Your Password"
                      : password.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "")
                          .length < 8
                      ? "Password should have more than 8 characters"
                      : null
                    : null
                }
                Click={true}
              />

              {/* UploadImage Input
               */}

              <UploadImageInput
                imageBox={avatarPreview}
                name={"avatar"}
                // avatar={avatar}
                inputError={
                  inputError ? (!avatar ? "Choose the image " : null) : null
                }
                onChange={registerDataHanadler}
              />

              <SubmitInput
                value={"Create Account"}
                formSubmit={registerSubmit}
                loading={loading}
              />
            </div>

            <p className="account_btn">
              Already have an account?
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
