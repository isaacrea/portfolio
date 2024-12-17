import React from "react";

const educationList = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of North Texas",
    description: "Focused on software engineering, cybersecurity, and data visualization.",
    year: "2025",
  },
  {
    title: "Associate of Science",
    institution: "Dallas College",
    description: "Completed core curriculum with a focus on general science and mathematics.",
    year: "2022",
  },
  {
    title: "CSCE Undergraduate Cybersecurity Certificate",
    institution: "University of North Texas",
    description:
      "Comprehensive study in computer science fundamentals, systems programming, computer networks, database systems, and cybersecurity.",
    year: "2025",
  },
  {
    title: "High School Diploma",
    institution: "Duncanville High School",
    description: "Graduated Top 3% of class with a 3.7 GPA and 60 college credit hours.",
    year: "2022",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education" style={{ backgroundColor: "#6D2932" }}>
      <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>Education</h2>
      <div className="education-container">
        {educationList.map((education, index) => (
          <div className="education-box" key={index}>
            <h3>{education.title}</h3>
            <p>{education.institution}</p>
            <p>{education.description}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
