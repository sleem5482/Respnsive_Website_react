import React from "react";
import assets from "../../assets/assets";
import "./About.css";

export default function About({setPlay}) {
    return (
        <div className="about">
            <div className="about-left">
                <img src={assets.about} alt="" className="about-img"/>
                <img src={assets.play_icon} alt="" className="play-icon" onClick={()=>setPlay(true)}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurthing Tomorrow's Leaders Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus nemo eligendi delectus magnam quam? Nobis
                    necessitatibus enim vitae commodi ipsum qui nam nisi.
                    Repudiandae, at assumenda consequuntur beatae illum nulla.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium repudiandae mollitia qui accusamus. Beatae quas
                    laudantium architecto dolor at aut.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laudantium aut sint a numquam voluptatum quod nihil. Neque, sequi blanditiis.</p>
            </div>
        </div>
    );
}
