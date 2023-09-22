import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../../assets/data";
import { Button } from "@mui/material";
const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="banner">
        <Slider {...settings}>
          {slides.map((banner, index) => {
            const { title, description, image, link } = banner;
            return (
              <div className="container_wrapper " key={index}>
                <div className="container">
                  <div className="banner_info">
                    <div className="banner_heading">
                      <h1>{title}</h1>
                      <p>{description}</p>
                      <Link to={link}>
                        <Button>Buy now</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="banner_image">
                    <img src={image} alt={title} key={index} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
