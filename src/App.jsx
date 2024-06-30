import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our Programs" subTitle="What We Offer" />
        <Programs />
        <About />
        <Title title="Gallery" subTitle="Campus Life" />
        <Campus />
        <Title title="Testimonial" subTitle="What Our Students Say" />
        <Testimonials />
        <Title title="CONTSACT US" subTitle="Get In Touch" />
        <Contact />
        <Footer />

      </div>
    </div>
  );
};

export default App;
