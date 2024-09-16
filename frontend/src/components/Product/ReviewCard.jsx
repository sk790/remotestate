import React from "react";
import Profile from "../../image/Profile.png";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({ review }) => {
  const options = {
    // edit: false,
    // color: "rgb(20,20,20,0.1)",
    // activeColor: "tomato",
    // size: window.innerWidth < 600 ? 20 : 25,
    size: "large",
    value: review.rating,
    // isHalf: true,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="reviewCard">
      <img src={Profile} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
