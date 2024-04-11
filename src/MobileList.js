import React from "react";
import "./MobileList.css";

export default function MobileList(props) {
  const {img,title,price} = props;

  return (
    <div className="main">
      <img className="image" src={img} />

      <div>
        <h2>{title}</h2>
        <p> ${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
