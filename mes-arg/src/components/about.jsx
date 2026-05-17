import React from "react";
import "./about.css";

const About = () => {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">About Mes-Arg</p>

          <h1>
            Building Modern PVC &
            <span> EVA Manufacturing Solutions</span>
          </h1>

          <p className="about-description">
            Mes-Arg is focused on supplying high-quality PVC and EVA
            manufacturing solutions for modern industries. We combine innovation,
            efficiency, and reliability to help businesses grow with confidence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <p className="section-label">Our Vision</p>

            <h2>
              Creating reliable industrial solutions for the next generation.
            </h2>
          </div>

          <div>
            <p>
              We aim to bridge manufacturing quality with modern technology by
              providing dependable machinery, materials, and production
              solutions for businesses worldwide.
            </p>

            <p>
              Our mission is to build long-term partnerships through trust,
              innovation, and consistent product quality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat-card">
          <h3>High Quality</h3>
          <p>Reliable industrial-grade products and materials.</p>
        </div>

        <div className="stat-card">
          <h3>Modern Technology</h3>
          <p>Efficient manufacturing systems built for scale.</p>
        </div>

        <div className="stat-card">
          <h3>Global Vision</h3>
          <p>Focused on long-term international partnerships.</p>
        </div>
      </section>
    </main>
  );
};

export default About;