import React from "react";

function Card2({ img, img1Name }) {
  return (
    <div className="card">
      <img src={img} alt={img1Name} />
    </div>
  );
}

export default Card2;
