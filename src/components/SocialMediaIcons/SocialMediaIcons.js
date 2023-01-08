import React from "react";
import "./SocialMediaIcons.css";
import Vector5 from "../../assets/Vector-5.png";
import Vector6 from "../../assets/Vector-6.png";
import Vector8 from "../../assets/Vector-8.png";
import Vector7 from "../../assets/Vector-7.png";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons-wrapper">
      <img src={Vector5} alt="facebook-icon" />
      <img src={Vector6} alt="instagram-icon" />
      <img src={Vector8} alt="linkedin-icon" />
      <img src={Vector7} alt="youtube-icon" />
    </div>
  );
};

export default SocialMediaIcons;
