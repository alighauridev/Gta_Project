import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/footer_logo.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="left_footer">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
      
          </div>
          <div className="mid_footer">
              <p>CopyRights 2023 &copy; Online Store</p>
            </div>
            <div className="right_footer">
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
