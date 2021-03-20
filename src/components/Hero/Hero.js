import React from "react";
import img1 from "../../images/gif.jpg";
import "./Hero.css";

function Header() {
  return (
    // <div className="container-1">
    //   <div className="box-1">
    //     <h1>Heading 1</h1>
    //     <p>Box 1</p>
    //   </div>
    //   <div className="box-2">
    //     <h1>Heading 2</h1>
    //     <p>Box 2</p>
    //   </div>
    // </div>

    <div className="header">
      <div className="header-right">
        <h1 className="heading1-line1">Build a Credit Card</h1>
        <br />
        <h1 className="heading1-line2">That is Definitely Yours</h1>
        <br />
        <h3 className="heading2-line1">
          With the OneSync Credit Card you can customise your
        </h3>
        <br />
        <h3 className="heading2-line2">card the way you want</h3>
        <button className="btn-hero">Get Started</button>
      </div>
      <div className="header-left">
        <img src={img1} alt="credit card " />
      </div>
    </div>
  );
}

export default Header;
