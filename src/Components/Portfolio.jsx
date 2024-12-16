import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Sonifi: Accessible Data Visualization with Sound",
    description:
      "Collaborated with a team to design and develop a web app that creates accessible, sonified graphs for both sighted and visually impaired users. Followed WCAG standards and utilized Agile methodology.",
    url: "https://github.com/DillonEdington/SonifyGraphs",
  },
  {
    title: "JSON Web Key Set (JWKS) Server Implementation",
    description:
      "Developed a secure JWKS server to support JSON Web Token (JWT) verification and authentication, ensuring robust and scalable identity management.",
    url: "https://github.com/isaacrea/jwksServer_v3",
  },
  {
    title: "AWS EC2 WordPress Blog",
    description:
      "Built and hosted a WordPress blog on AWS EC2 to document my learning journey in web development and cloud hosting.",
    url: "",
  },
  {
    title: "C and C++ Algorithm Implementations",
    description:
      "Created various algorithm implementations as part of my Algorithms course, showcasing skills in C and C++ programming.",
    url: "",
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
            className="slideInLeft"
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
