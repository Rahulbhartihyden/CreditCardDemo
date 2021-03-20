import React from "react";
import "./FormSection.css";
import img2 from "../../images/insurance 1.png";

function FormSection() {
  return (
    <div className="formSection">
      <div className="formSection-left">
        {/* <h1>Left Side</h1> */}
        <form className="form">
          <input
            className="input-feild1"
            type="text"
            placeholder="Enter your phone number"
          />
          <br />
          <input
            className="input-feild2"
            type="text"
            placeholder="Enter your pan number"
          />
          <br />
          <input
            className="input-feild3"
            type="text"
            placeholder="Enter your Address"
          />
        </form>
        
      </div>
      <div className="formSection-right">
        <div className="img">
          <img src={img2} alt="insurance" />
        </div>
        <div className="heading1-section3">
            <h1>Fill Eligibility Form</h1>
        </div>
        <div className="heading2-section3">
            <h2>Tell us about Yourself, to find out if <br/>you're eligible to apply.</h2>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
