import React, { useRef } from "react";
import assets from "../../assets/assets";
import "./testimonials.css";

export default function Testimonials() {
    const slider= useRef()
    let tx=0;
    const slideForward=()=>{
        if(tx > -50){
            tx -=25;
        }
        else{
            tx =0;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx < 0){
            tx +=25;
        }
        else{
            tx =-50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={assets.next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={assets.back_icon} alt="" className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={assets.user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero tenetur quia sed mollitia
                                nulla aperiam perspiciatis vitae distinctio
                                reprehenderit dicta aspernatur saepe beatae,
                                ipsum ea eaque commodi iste voluptate
                                voluptates?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={assets.user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero tenetur quia sed mollitia
                                nulla aperiam perspiciatis vitae distinctio
                                reprehenderit dicta aspernatur saepe beatae,
                                ipsum ea eaque commodi iste voluptate
                                voluptates?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={assets.user_3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero tenetur quia sed mollitia
                                nulla aperiam perspiciatis vitae distinctio
                                reprehenderit dicta aspernatur saepe beatae,
                                ipsum ea eaque commodi iste voluptate
                                voluptates?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={assets.user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero tenetur quia sed mollitia
                                nulla aperiam perspiciatis vitae distinctio
                                reprehenderit dicta aspernatur saepe beatae,
                                ipsum ea eaque commodi iste voluptate
                                voluptates?
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
