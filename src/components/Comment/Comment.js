import React from "react";
import "./Comment.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Comment = ({ image, comment, author }) => {
  return (
    <div className="comment-card-containter">
      <div className="comment-top-wrapper">
        <div className="comment-top-image-container">
          <img src={image} className="comment-card--image" alt="profile-pic" />
        </div>
        <div className="comment-card-comment-text">
          <RiDoubleQuotesL /> {comment} <RiDoubleQuotesR />
        </div>
      </div>
      <div className="comment-bottom-wrapper">
        <div className="comment-author-wrapper">
          <div className="comment-author-indicator"></div>
        </div>
        <h3 className="comment-author-name">{author}</h3>
      </div>
    </div>
  );
};

export default Comment;
