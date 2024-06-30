import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
function About() {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Producing Tomorrow's Best Graduates</h2>
        <p>
          At our university, we pride ourselves on our commitment to academic
          excellence. With a distinguished faculty comprising experts in their
          fields and state-of-the-art facilities, we provide students with a
          stimulating environment for learning and research. Our rigorous
          academic programs ensure that graduates are well-equipped with the
          knowledge and skills needed to excel in their chosen fields.
        </p>

        <p>
          One of the hallmarks of our university is our vibrant and inclusive
          community. We celebrate diversity in all its forms and foster an
          atmosphere of mutual respect and understanding. Students from around
          the world come together to exchange ideas, enriching their educational
          experience and preparing them to thrive in an interconnected world.
        </p>

        <p>
          At our university, we are dedicated to making a positive impact on the
          world. Through innovative research initiatives and community
          engagement programs, our students and faculty are tackling some of the
          most pressing challenges facing society today. Whether it's through
          groundbreaking discoveries in the sciences or initiatives to promote
          social justice, our university is committed to creating meaningful
          change on a global scale.
        </p>
      </div>
    </div>
  );
}

export default About;
