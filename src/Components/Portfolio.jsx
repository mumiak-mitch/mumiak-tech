import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Recipe Finder",
    description:
      "A web application that allows users to search for recipes. It features API integration, search functionality, and dynamic DOM manipulation.",
    url: "https://www.linkedin.com/in/mitchel-mugono/details/projects/", 
  },
  {
    title: "Task Management Tool",
    description:
      "A tool designed to help users manage tasks efficiently with drag and drop functionality, task prioritization, and real-time notifications.",
    url: "https://www.linkedin.com/in/mitchel-mugono/details/projects/", 
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates using API integration, with a focus on Promises and Async/Await for handling data.",
    url: "https://www.linkedin.com/in/mitchel-mugono/details/projects/", 
  },
  {
    title: "Paradise Kinyozi Branding",
    description:
      "Created a professional logo and business card design for Paradise Kinyozi, capturing the essence of the brand and enhancing its visual identity.",
    url: "https://www.linkedin.com/in/mitchel-mugono/details/projects/", 
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
