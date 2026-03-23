import './LandingPage.css';
import homeBG from './assets/HomeBackground.jpg';
import resumePFP from './assets/ResumePFP.jpg';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

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

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("CCoop0531@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

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

          <div className="home-socials">
            <a
              href="https://www.linkedin.com/in/christopherbradleycooper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="home-socials__link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Chris-B-Cooper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="home-socials__link"
            >
              <FaGithub />
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email"
              className="home-socials__link"
              type="button"
            >
              <FaEnvelope />
            </button>
          </div>

          {copied && <div className="copy-popup">Email Copied!</div>}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="section about-section"
      >
        <div className="about-section__inner">

          {/* Section Title */}
          <h2 className="about-title">ABOUT MYSELF</h2>

          {/* Avatar */}
          <img
            src={resumePFP}
            alt="Christopher Cooper portrait"
            className="about-avatar"
          />

          {/* Description text box */}
          <div className="about-description">
            <p>
              I’m a Computer Science student at the University of Central Florida focused on building scalable, high-performance software that bridges web, mobile, and AI-driven experiences. I’ve developed full-stack applications ranging from inventory and recipe generation platforms to data-driven sports analytics tools, while leading teams using Agile methodologies, sprint planning, and project management best practices. I also have hands-on experience with cloud computing through AWS, working with services such as EC2, S3, IAM, and CloudWatch, with a focus on cloud architecture, infrastructure provisioning, monitoring, and security best practices. My interests include distributed systems, cloud-native development, and building reliable, user-centric applications that transform real-world problems into efficient, production-ready digital solutions.
            </p>
          </div>

          {/* Two-column section */}
          <div className="about-columns">

            {/* Skills Box */}
            <div className="about-box">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript / Typescript</li>
                <li>React / React Native</li>
                <li>Java</li>
                <li>C / C++</li>
                <li>Python</li>
                <li>HTML</li>
              </ul>
            </div>

            {/* Personal Info Box */}
            <div className="about-box">
              <h3>Personal Info</h3>
              <ul>
                <li>
                  <span className="info-label">Name:</span> Christopher Cooper
                </li>
                <li>
                  <span className="info-label">Location:</span> Orlando, FL
                </li>
                <li>
                  <span className="info-label">Email:</span> CCoop0531@gmail.com
                </li>
                <li>
                  <span className="info-label">Education:</span> University of Central Florida — B.S. Computer Science
                </li>
              </ul>
            </div>
          </div>

          {/* Work Experience Box */}
          <div className="about-work-experience">
            <h3>Work Experience</h3>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-role">FRP ITAM Intern</span>
                <span className="experience-date">May 2023 – September 2023</span>
              </div>
              <ul>
                <li>Resolved a wide range of IT support tickets, troubleshooting hardware and software issues across multiple device types.</li>
                <li>Assisted with basic server and cloud administration tasks in Microsoft Azure.</li>
                <li>Supported user onboarding by provisioning accounts and devices and integrating new hires into internal systems.</li>
                <li>Maintained accurate asset inventory records and performed regular updates and audits to ensure data integrity.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-role">Target Trainer</span>
                <span className="experience-date">June 2021 – Present</span>
              </div>
              <ul>
                <li>Trained and coached new Target team members across multiple roles, ensuring adherence to strict operational guidelines.</li>
                <li>Strengthened leadership and communication skills by coordinating large groups to meet daily performance goals.</li>
              </ul>
            </div>
          </div>
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