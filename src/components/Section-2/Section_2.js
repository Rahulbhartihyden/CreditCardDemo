import React from "react";
import "./Section_2.css";
import img3 from "../../images/networking 1.png";
import CardCarousel from "../Carousel/Carousel";

function Section_2() {
  return (
    <div className="section_2">
      <div className="section_2Left">
        <div className="imgSection">
          <img src={img3} alt="" />
        </div>
        <div className="heading-section_2">
          <h1 className="heading-section_2_h1">Choose Your Rewards</h1>
          <h2 className="heading-section_2_h1_line">
            Match your card to your lifestyle. We've got <br />
            benefits from across brands & categories for <br />
            you to choose from. Each benefit has an <br />
            attached fee. Just add the ones you like to <br />
            your card.
          </h2>
        </div>
      </div>
      <div className="section_2Right">
        <CardCarousel />
      </div>
    </div>
  );
}

export default Section_2;
