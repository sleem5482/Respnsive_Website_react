import React from "react";
import assets from "../../assets/assets";
import "./campus.css";

export default function Campus() {
    return (
      <div className="campus">
        <div className="gallery">
            <img src={assets.gallery_1} alt="" />
            <img src={assets.gallery_2} alt="" />
            <img src={assets.gallery_3} alt="" />
            <img src={assets.gallery_4} alt="" />
        </div>
        <button className="btn dark-btn">See more here <img src={assets.white_arrow} alt="" /></button>
      </div>
    );
}
