import React from "react";
import "./CompanyBenefitsCard.css";
import Vector from "../../assets/Vector.png";

const CompanyBenefitsCard = ({ image, title, subTitle }) => {
  return (
    <div className="com-benefit--card-wrapper">
      <div className="com-benefit--card-img">
        <img src={image} alt="office-img" />
      </div>
      <h2>{title}</h2>
      <div className="com-benefit--card-subtitle">{subTitle}</div>
      <div className="com-benefit--card-action">
        Learn More <img src={Vector} alt="right-arrow" />
      </div>
    </div>
  );
};

export default CompanyBenefitsCard;
