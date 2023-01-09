import React from "react";
import "./CardCarousel.css";
import Carousel from "react-elastic-carousel";
import PaymentCard from "../PaymentCard/PaymentCard";

const CardCarousel = () => {
  const breakPoints = [
    { width: 768, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];

  const featureList = [
    "Attestation Charges",
    "Registered Agent",
    "Registered Office",
    "Varal Administrative",
    "Preparing Statutory File",
    "Liasing with Registration Authorities",
    "Due Diligence Appraisal",
    "Keeping The Register",
    "Seal Charges",
    "Certificate of Good Standing",
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        <PaymentCard
          location="AJMAN OFFSHORE"
          cost="$2,997"
          companyName="Ajman Offshore New Company formation includes"
          inclusiveList={featureList}
        />
        <PaymentCard
          location="RAK ICC"
          cost="$2,997"
          companyName="Rak Icc New Company formation includes"
          inclusiveList={featureList}
        />
        <PaymentCard
          location="SHARJAH MEDIA CITY"
          cost="$4,124"
          companyName="Sharjah Media City New Company formation include "
          inclusiveList={featureList}
        />
      </Carousel>
    </div>
  );
};

export default CardCarousel;
