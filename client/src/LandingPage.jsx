import './LandingPage.css';
import homeBG from './assets/HomeBackground.jpg';
import { useState, useEffect } from 'react';

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + window.innerHeight / 2;

      let closestSectionId = 'home';
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSectionId = section.id;
        }
      });

      setActiveSection(closestSectionId);
    };

    // Run once on initial load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page">
      {/* Sticky Header */}
      <header className="site-header">
        <div className="site-header__inner">
          {/* Navigation */}
          <nav className="site-header__nav">
            <a
              href="#home"
              className={`site-header__link ${activeSection === "home" ? "active" : ""}`}
            >
              HOME
            </a>
            <a
              href="#about"
              className={`site-header__link ${activeSection === "about" ? "active" : ""}`}
            >
              ABOUT
            </a>
            <a
              href="#resume"
              className={`site-header__link ${activeSection === "resume" ? "active" : ""}`}
            >
              RESUME
            </a>
            <a
              href="#projects"
              className={`site-header__link ${activeSection === "projects" ? "active" : ""}`}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className={`site-header__link ${activeSection === "contact" ? "active" : ""}`}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="section home-section"
        style={{ backgroundImage: `url(${homeBG})` }}
      >
        <div className="home-section__inner">
          <h1>Christopher Cooper</h1>

          <h2 className="home-subtitle">
            Software Developer | Software Engineer | ITAM
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="section about-section"
      >
        <div className="about-section__inner">
          <h2>About</h2>
        </div>
      </section>

      {/* Resume Section */}
      <section 
        id="resume" 
        className="section resume-section"
      >
        <div className="resume-section__inner">
          <h2>Resume</h2>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects" 
        className="section projects-section"
      >
        <div className="projects-section__inner">
          <h2>Projects</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact" 
        className="section contact-section"
      >
        <div className="contact-section__inner">
          <h2>Contact</h2>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;