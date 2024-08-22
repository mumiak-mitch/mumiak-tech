import React from "react";
import image from "../images/about.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a graphic designer and web developer. I enjoy creating unique and simplistic user interfaces, as well as bringing websites to life with clean and functional design.";

const skillsList = [
  "Web design",
  "User experience",
  "Graphic design",
  "Brand Identity",
  "Responsive Web Development"
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation, whether it's through compelling graphics or seamless web experiences.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
