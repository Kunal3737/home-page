import React from "react";
import "./BlogArticle.css";

const BlogArticle = ({ image, title, duration, scale }) => {
  const blogArticleWrapperStyles = `${scale ? "blog-article--scale" : ""}`;
  return (
    <div className={`${blogArticleWrapperStyles} blog-article-wrapper`}>
      <div className="blog-article--image">
        <img src={image} alt="blog-article" />
      </div>
      <div className="blog-article-title-wrapper">
        <h3 className="blog-article--title">{title}</h3>
        <div className="blog-article--duration">{duration}</div>
      </div>
    </div>
  );
};

export default BlogArticle;
