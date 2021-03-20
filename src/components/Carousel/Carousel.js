import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";
// import "./Card";
import Card from "./Card";
import img4 from "../../images/offer.png";
import img5 from "../../images/Card2New..png";
import img6 from "../../images/Card3New..png";

function CardCarousel() {
  // const breakpoints=[{
  //   width:200
  // }]
  return (
    <div className="carousel">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={1500}
        showArrows={false}
        pagination={false}
      >
        <Card img={img4} img1Name="card 1" />
        <Card img={img5} img1Name="card 2" />
        <Card img={img6} img1Name="card 3" />
      </Carousel>
    </div>
  );
}

export default CardCarousel;
