import React from "react";
import "./Products.scss";
import { Link, useNavigate } from "react-router-dom";
import bag from "../../../assets/images/bag.png";
import Rating from "@mui/material/Rating";
import LoadingBar from "react-top-loading-bar";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, images, price, ratings, numOfReviews } = product;
  return (
    <>
      <Link
        to={`/product/${_id}`}
        className="product_card"
        // onClick={() => {
        //   navigate(`/product/${_id}`);
        // }}
        key={_id}
      >
        <div className="product_image">
          {/* <img src={images[0].url} alt={name} /> */}
          <img src={bag} alt={name} draggable="false" />
        </div>
        <h1 className="product_title">{name}</h1>

        <div className="product_ratings">
          <Rating
            name="half-rating-read"
            defaultValue={ratings}
            precision={0.5}
            size="small"
            readOnly
          />
          <span className="product_numOfReviews">({numOfReviews} Reviews)</span>
        </div>

        <div className="product_price">{`$${price}`}</div>
      </Link>
    </>
  );
};

export default Product;
