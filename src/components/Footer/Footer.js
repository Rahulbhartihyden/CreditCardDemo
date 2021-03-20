import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="headingFooter">
          <h1>OpenSync Credit Card</h1>
          <br />
          <h5 className="headingFooterSecondLine">Experience Freedom</h5>
        </div>
        <div className="footerButton">Get Started</div>
        
          <hr style={{
            display:"inline-block",
            position:"relative",
            top:240,
            left:150,
            color: "red",
            backgroundColor: "#fff",
            height: 2,
            width:1200,
            
            
           
        }}/>
        

        <div className="row">
          {/* coloumn1 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Manage Your Card</li>
              <li>Track Your Application</li>
              <li>Contact us</li>
            </ul>
          </div>
          {/* coloumn2 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Manage Your Card</li>
              <li>Track Your Application</li>
              <li>Contact us</li>
            </ul>
          </div>
          {/* coloumn3 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Manage Your Card</li>
              <li>Track Your Application</li>
              <li>Contact us</li>
            </ul>
          </div>
          {/* coloumn4 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Manage Your Card</li>
              <li>Track Your Application</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
