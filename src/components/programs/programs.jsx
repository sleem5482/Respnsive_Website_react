import React from "react";
import assets from "../../assets/assets";
import "./programs.css";

export default function Programs() {
    return (
        <div className="programs">
            <div className="program">
                <img src={assets.program_1} alt="" />
                <div className="caption">
                    <img src={assets.program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={assets.program_2} alt="" />
                <div className="caption">
                    <img src={assets.program_icon_2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={assets.program_3} alt="" />
                <div className="caption">
                    <img src={assets.program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    );
}
