import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
        Empowering Minds, Inspiring Futures.
        </h1>
        <p>
          Welcome to our institution, a dynamic educational hub committed to
          empowering minds, fostering innovation, and nurturing the leaders of
          tomorrow.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
