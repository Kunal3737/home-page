import React from "react";
import "./FooterItem.css";

const FooterItem = ({ title, list }) => {
  return (
    <div className="footer-item-wrapper">
      <h3 className="footer-item--title">{title}</h3>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item) => <li className="footer-item--list">{item}</li>)}
      </ul>
    </div>
  );
};

export default FooterItem;
