import React, { useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import Data from "./Data";

const Testimonials = () => { 
        const [position, setPosition] = useState(0);      
        const handleSlide = (direction) => {
          const current = position;
          setPosition(prevPosition => {
            const newPosition = direction === 'next' ?
            (current > -75 ? prevPosition - 25:prevPosition) :
            (current < 0 ? prevPosition + 25: prevPosition);
        return newPosition;
          });
        };
  return (
    <div className="testimonials" id="testimonials" >
      <img className="back-btn "  src={back_icon} alt="" onClick={() => handleSlide('prev')} />
      <img className="next-btn" src={next_icon} alt="" onClick={() => handleSlide('next')}  />
      <div className="slider">
        <ul style={{ transform: `translateX(${position}%)` }}>
          {Data.map((data,index) => (
            <li key={index} >
                
              <div className="slide">
                <div className="user-info">
                  <img src={data.pic} alt="" />
                  <div>
                    <h3>{data.name}</h3>
                    <h5>{data.location}</h5>
                  </div>
                </div>
                <p>{data.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
