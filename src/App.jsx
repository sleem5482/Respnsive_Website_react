import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import Programs from "./components/programs/programs";
import Title from "./components/title/title";
import About from "./components/About/About";
import Campus from "./components/campus/campus";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";
function App() {
  const [play,setPlay]=useState(false)


    return (
       <>
     <Navbar/>
       <Hero/>
       <div className="container">
        <Title subTitle="Our PROGRAMS" title="What We Offer"/>
       <Programs/>
       <About setPlay={setPlay}/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Students Says"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
       </div>
       <VideoPlayer play={play} setPlay={setPlay}/>
       </>
    );
}

export default App;
