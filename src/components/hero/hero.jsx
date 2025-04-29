import React from "react";
import assets from "../../assets/assets";
import "./hero.css";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text container">
                <h1>We Ensure better education for a better world</h1>
                <p>
                    Our cutting-dege curriculum is designed to empower students
                    with the knowledge, skills and experiences nedded to excel
                    in the dynamic field of ecucation
                </p>
                <button className="btn">
                    Explore more <img src={assets.dark_arrow} alt="" />
                </button>
            </div>
        </div>
    );
}
