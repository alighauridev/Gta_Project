import React, { useEffect, useState } from "react";
import "./ProductDetials.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetials } from "../../Redux/actions/productAction";
import { useParams } from "react-router-dom";
import MetaData from "../../components/Layouts/MetaData";
import bag from "../../assets/images/bag.png";
import { ImageListItem, Rating, Skeleton, capitalize } from "@mui/material";
import { QuanityInput } from "../../components/Controls/Inputs/Inputs";
import ReviewCard from "../../components/Layouts/Reviews/ReviewCard";
import BackdropLoading from "../../components/Layouts/BackdropLoading";
const ProductDetials = () => {
  const [respnsive, setRespnsive] = useState(4);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetials
  );
  const {
    name,
    _id,
    numOfReviews,
    price,
    stock,
    descripton,
    images,
    category,
    ratings,
    reviews,
  } = product;

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: reviews && respnsive,
    slidesToScroll: reviews && respnsive === 1 ? 1 : 2,
  };

  useEffect(() => {
    dispatch(getProductDetials(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   const handleresize = () => {
  //     if (window.innerWidth < 768) {
  //       setRespnsive(2);
  //       console.log(respnsive);
  //       if (window.innerWidth < 450) {
  //         setRespnsive(1);
  //       }
  //     } else {
  //       setRespnsive(4);
  //     }
  //   };
  //   window.addEventListener("resize", handleresize);

  //   return () => {
  //     window.removeEventListener("resize", handleresize);
  //   };
  // }, []);

  console.log(name);

  return (
    <>
      {loading ? (
        <BackdropLoading open={true} />
      ) : (
        <>
          <MetaData title={name && capitalize(name)} />
          <section id="productDetials">
            <div className="container">
              <div className="productDetial_carusel">
                <div className="carousel">
                  <Carousel>
                    {!loading ? (
                      images &&
                      images.map((image, i) => {
                        return (
                          <>
                            <img
                              key={i}
                              className="carousel_image"
                              src={bag}
                              alt={`${i}slide`}
                            />
                          </>
                        );
                      })
                    ) : (
                      <>
                        <h1>Loading...</h1>
                      </>
                    )}
                    <img src={bag} className="carousel_image" alt="" />
                    <img src={bag} className="carousel_image" alt="" />
                  </Carousel>
                </div>
              </div>
              <div className="productDetial_info">
                <h1 className="productDetial_title">{name}</h1>
                <h2 className="productDetial_category">
                  Category: <b>{category}</b>
                </h2>
                <div className="productDetial_ratings">
                  Rated:
                  <Rating
                    name="half-rating-read"
                    defaultValue={ratings}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <b className="productDetial_numOfReviews">
                    ({numOfReviews} )
                  </b>
                </div>
                <div className="productDetial_price">
                  <h3>{`$${price}`}</h3>
                </div>
                <div className="productDetial_btns">
                  <div className="productDetial_quanity">
                    <QuanityInput value={1} />
                  </div>

                  <div className="productDetial_AddToCart_btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
                <div className="productDetial_stock">
                  Stock:{" "}
                  <span style={{ color: stock < 1 ? "#D23F57" : "green" }}>
                    {stock < 1 ? "OutOfStock" : "InStock"}
                  </span>
                </div>

                <div className="productDetial_description">
                  Description :<p>{descripton}</p>
                </div>
                <div className="productDetial_submitReview_btn">
                  <button>Submit Review</button>
                </div>
              </div>
            </div>
            <div className="productDetial_reviews">
              <div className="reviews_heading">
                <h1>Reviews</h1>
              </div>

              <div className="reviews_grid">
                {!loading && reviews ? (
                  reviews[0] ? (
                    <Slider {...settings}>
                      {reviews.map((review, index) => (
                        <>
                          <ReviewCard review={review} key={index} />
                        </>
                      ))}
                    </Slider>
                  ) : (
                    <>
                      <h1>Review not yet</h1>
                    </>
                  )
                ) : (
                  <h1>Loading..</h1>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetials;
