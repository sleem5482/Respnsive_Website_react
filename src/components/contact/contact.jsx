import React from "react";
import assets from "../../assets/assets";
import "./contact.css";

export default function Contact() {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb5f3018-9ab5-4164-b8a0-8741bd4316a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={assets.msg_icon} alt="" /></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam deserunt a quod molestiae dolores ab dolorum ducimus
                    eius aperiam autem. Optio necessitatibus voluptatum adipisci
                    provident excepturi nobis mollitia porro cumque.
                </p>
                <ul>
                    <li><img src={assets.mail_icon} alt="" />sleem@gmail.com </li>
                    <li><img src={assets.phone_icon} alt="" />0118372494 </li>
                    <li><img src={assets.location_icon} alt="" />beni seuf /bani hamad </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" id="" placeholder="Enter your name" required/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id=""placeholder="Enter Your Mobile Number"required />
                    <label htmlFor="msg">Write your messages here</label>
                   <textarea name="msg" id="" placeholder="Enter Your Message" rows={6} cols={50} required></textarea>
                   <button type="submit"className="btn dark-btn">Submit <img src={assets.white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}
