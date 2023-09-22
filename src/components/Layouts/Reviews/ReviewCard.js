import React from "react";
import "./ReviewCard.scss";
import { Rating } from "@mui/material";
import ProfileImage from "../../../assets/images/Avatar-logout.png";

const ReviewCard = ({ review }) => {
  const { name, comment, rating } = review;
  return (
    <>
      <div className="review_card">
        <div className="review_user_image">
          <img src={ProfileImage} alt={name} />
        </div>
        <h3 className="review_user_name">{name}</h3>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          size="small"
          readOnly
        />
        <div className="review_user_comment">
          <span>{comment}</span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
