import React from "react";
import Button from "../Button/Button";
import "./PaymentCard.css";
import Group35 from "../../assets/Group 35.png";

const PaymentCard = ({ location, cost, companyName, inclusiveList }) => {
  return (
    <div className={`payment-card-wrapper`}>
      <div className="payment-card-content-wrapper">
        <h1 className="payment-card--location">{location}</h1>
        <div className="payment-card--cost-wrapper">
          <span className="payment-card--cost">{cost}&nbsp;</span>
          <span className="payment-frequency">One Time Payment</span>
        </div>
        <div className="payment-card--company-name">{companyName}</div>
        <div className="payment-card--list-wrapper">
          <ul>
            {inclusiveList &&
              inclusiveList.length > 0 &&
              inclusiveList.map((item) => (
                <li className="feature-list-item-wrapper">
                  <img src={Group35} alt="tick-icon" />
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <Button
          content="Continue"
          size="lg"
          variant="outline"
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default PaymentCard;
