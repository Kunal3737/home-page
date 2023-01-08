import React from "react";
import "./CompanyRegCard.css";

const CompanyRegCard = ({ image, title, subTitle, action }) => {
  return (
    <div className="company-reg-card--wrapper">
      <div className="company-reg-card--logo">
        <img src={image} alt="company-logo" />
      </div>
      <h2 className="company-reg-card--title">{title}</h2>
      <div className="company-reg-card--sub-title">{subTitle}</div>
      <div className="company-reg-card--action-text">Get Started</div>
    </div>
  );
};

export default CompanyRegCard;
