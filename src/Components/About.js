import React from "react";
import Doctor from "../Assets/team.jpeg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Casting Plus, your premier destination for casting solutions tailored to your needs. Our team of professionals provides personalized services and expert guidance, ensuring your casting experience is seamless and successful. Join us on this exciting journey in the world of entertainment and let us help you find the perfect cast for your projects
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Find the Perfect Cast"
          description="Discover the ideal talent for your project with Casting Plus. Our team of expert casting directors prioritize your vision, offering tailored casting solutions."
        />

        <SolutionStep
          title="Schedule Auditions"
          description="Choose the dates and times that suit your production schedule best, and let our dedicated team of casting professionals ensure your project's success with personalized auditions."
        />

        <SolutionStep
          title="Get Your Cast"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
