import React, { useRef } from "react";
import assets from "../../assets/assets";
import "./videoPlayer.css";

export default function VideoPlayer({play , setPlay}) {
    const player=useRef(null)

    const closePlayer=(e)=>{
        if(e.target===player.current){ //player.current main only div
            setPlay(false)
        }
    }
    return (
      <div className={`video-player ${play?"":"hide"}`} ref={player} onClick={closePlayer}>
        <video src={assets.video} autoPlay muted controls></video>
      </div>
    );
}
