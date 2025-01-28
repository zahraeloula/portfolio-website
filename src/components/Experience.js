import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'react-multi-carousel/lib/styles.css';

export const Experience = () => {
  const experiences = [
    {
      title: "Intern - AI and Web Development",
      duration: "July 2024 – August 2024",
      company: "Eklectik",
      description:
        "Developed an AI assistant for the Walk & Win app to provide personalized advice based on walking performance and rankings, using data cleaning, machine learning, and real-time weather integration to boost user engagement.",
      skills:
        "Rasa, Python, SQL, Twilio API, and OpenWeather API",
    },
  ];

  return (
    <section 
      className="experience-section" 
      id="experiences" 
      style={{
        background: `url(${colorSharp}) no-repeat center center fixed`, 
        backgroundSize: "cover", 
        backgroundPosition: "-50px center", // Adjust this value to shift the image to the left
      
      }}
    >
      <div className="top-header">
        <h1>Experiences</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <h3>{exp.title}</h3>
              <h4>{exp.duration}</h4>
              <p>{exp.company}</p>
              <p className="description">{exp.description}</p>
              <p className="skills">
                <strong>Skills:</strong> {exp.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
