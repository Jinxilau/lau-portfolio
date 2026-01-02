import React from "react";
/**
 * Education component
 *
 * Space for you to describe your educational background.
 */

const Education = () => {
  const educationCardStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "8px",
    padding: "2rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const universityNameStyle = {
    color: "#2c3e50",
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    borderLeft: "4px solid #3498db",
    paddingLeft: "1rem",
  };

  const degreeStyle = {
    color: "#3498db",
    fontSize: "1.05rem",
    fontWeight: "600",
    marginBottom: "0.3rem",
  };

  const dateStyle = {
    color: "#7f8c8d",
    fontSize: "0.95rem",
    fontWeight: "500",
    marginBottom: "1rem",
    fontStyle: "italic",
  };

  const listItemStyle = {
    marginBottom: "0.7rem",
    color: "#34495e",
    lineHeight: "1.6",
  };

  return (
    <section className="padding" id="education" style={{ backgroundColor: "#ecf0f1" }}>
      <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2rem", color: "#2c3e50" }}>Education</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={educationCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(52, 152, 219, 0.2)";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={universityNameStyle}>Universiti Tun Hussien Onn Malaysia (UTHM)</h3>
          <p style={degreeStyle}>Bachelor of Information Technology (Hons)</p>
          <p style={dateStyle}>2021 - Present</p>
          <ul style={{ listStylePosition: "inside", paddingLeft: "0" }}>
            <li style={listItemStyle}>
              <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Database Systems, Web Development, Operating Systems, Network Security.
            </li>
            <li style={listItemStyle}>
              <strong>Activities:</strong> Member of the IT Club, Volunteer for Tech Workshops.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;