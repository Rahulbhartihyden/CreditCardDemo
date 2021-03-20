import React from "react";
import AliceCarousel from "react-alice-carousel";

import "./Section3.css";
import img7 from "../../images/smallCard1.png";
import img8 from "../../images/smallCard2.png";
import img9 from "../../images/smallCard3.png";
import img10 from "../../images/small Card4.png";
import img11 from "../../images/BigCard1.png";
import img12 from "../../images/BigCard2.png";
import img13 from "../../images/BigCard3.png";
import img14 from "../../images/BigCard4.png";
import img15 from "../../images/paint-roller 1.png";

function Section3() {
  const SlideChange = (e) => {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  };

  const SlideChanged = (e) => {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  };
  const responsive1 = {
    0: {
      items: 1,
    },

    1440: {
      items: 1,
    },
  };
  const responsive2 = {
    0: {
      items: 1,
    },
    200: {
      items: 2,
    },
    400: {
      items: 4,
    },
  };
  return (
    <div className="section3">
      <div className="sectionbody">
        <div className="section3Left">
          <div className="AliceCarouselUpper">
            <AliceCarousel
              duration={400}
              autoPlay={true}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              responsive={responsive1}
              dotsDisabled={false}
              pagination={false}
              buttonsDisabled={false}
              autoPlayInterval={1500}
              autoPlayDirection="ltr"
              autoPlayActionDisabled={false}
              onSlideChange={SlideChange}
              onSlideChanged={SlideChanged}
            >
              <img src={img11} alt="card1" />
              <img src={img12} alt="card2" />
              <img src={img13} alt="card3" />
              <img src={img14} alt="card4" />
            </AliceCarousel>
          </div>
          <div className="AliceCarousellower">
            <AliceCarousel
              duration={400}
              autoPlay={true}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              responsive={responsive2}
              autoPlayInterval={1500}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={SlideChange}
              onSlideChanged={SlideChanged}
            >
              <img src={img7} alt="Bigcard1" />
              <img src={img8} alt="Bigcard2" />
              <img src={img9} alt="Bigcard3" />
              <img src={img10} alt="Bigcard4" />
            </AliceCarousel>
          </div>
        </div>
        <div className="section3Right">
          <div className="imgSection3">
            <img src={img15} alt="paint roller" />
          </div>
          <div className="headingSection3">
            <h1>Select Your Style</h1>
          </div>
          <div className="headingSectionh2">
            <h6>
              Match your card to your personality. Whether
              <br />
              you like a minimal look or something that
              <br />
              catches everyone's eyes, we've got a style for
              <br />
              you. You can update your style every year, for
              <br />a small fee
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
