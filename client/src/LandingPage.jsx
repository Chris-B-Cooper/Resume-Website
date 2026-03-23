import './LandingPage.css';
import homeBG from './assets/HomeBackground.jpg';
import resumePFP from './assets/ResumePFP.jpg';
import smartStockImg from './assets/SmartStock.png';
import smartStockExampleImg from './assets/SmartStockExample.png';
import tradeWizardImg from './assets/TradeWizard.png';
import vaultRunnerImg from './assets/VaultRunner.png';
import vaultRunnerExampleImg from './assets/VaultRunnerExample.png';
import whiteElephantImg from './assets/WhiteElephant.png';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTimes } from 'react-icons/fa';

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Smart Stock',
      image: smartStockImg,
      modalImage: smartStockExampleImg,
      tags: ['React', 'Node.js', 'OCR', 'AI', 'Inventory Systems'],
      description:
        'Smart Stock is a full-stack inventory management system that automates item tracking using barcode and receipt scanning with OCR to extract product data and expiration dates. It maintains a structured inventory with real-time updates, categorization, and expiration monitoring. An AI-powered recipe generator suggests meals based on available ingredients. The project emphasizes efficient state management, clean data flow, and a responsive UI for seamless user interaction.'
    },
    {
      title: 'Trade Wizard',
      image: tradeWizardImg,
      modalImage: tradeWizardImg,
      tags: ['React', 'API', 'Data Analysis', 'Sports Analytics'],
      description:
        'Trade Wizard is a fantasy football trade analyzer that evaluates proposed trades and assigns a grade to each side based on player value and projected performance. It processes player data, compares positional impact, and generates balanced trade insights using structured scoring logic. The system focuses on clean data handling, efficient computation, and intuitive UI feedback, allowing users to quickly assess trade fairness and make more informed decisions.'
    },
    {
      title: 'Vault Runner',
      image: vaultRunnerImg,
      modalImage: vaultRunnerExampleImg,
      tags: ['Unity', 'C#', 'Game Physics', 'AI NPCs'],
      description:
        'Vault Runner is a 2D platformer built in Unity featuring multiple levels where players use tools and movement mechanics to overcome obstacles and collect gems. The project includes physics-based interactions, collision systems, and responsive input handling. It also incorporates AI-driven NPC behavior for dynamic interactions within levels. Emphasis was placed on level design, gameplay systems, and maintaining smooth performance across scenes.'
    },
    {
      title: 'White Elephant',
      image: whiteElephantImg,
      modalImage: whiteElephantImg,
      tags: ['React', 'State Management', 'Game Logic', 'UI Systems'],
      description:
        'White Elephant is a web application that simulates a digital gift exchange with automated participant management and real-time game state tracking. It includes hidden gift logic, controlled reveal mechanics, and a structured steal system to replicate real gameplay rules. A visualization layer displays participants and available gifts, ensuring clarity and engagement while emphasizing state synchronization and interactive UI design.'
    }
  ];

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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

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

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page">
      {/* Sticky Header */}
      <header className="site-header">
        <div className="site-header__inner">
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

          <h2 className="about-title">ABOUT MYSELF</h2>

          <img
            src={resumePFP}
            alt="Christopher Cooper portrait"
            className="about-avatar"
          />

          <div className="about-description">
            <p>
              I’m a Computer Science student at the University of Central Florida focused on building scalable, high-performance software that bridges web, mobile, and AI-driven experiences. I’ve developed full-stack applications ranging from inventory and recipe generation platforms to data-driven sports analytics tools, while leading teams using Agile methodologies, sprint planning, and project management best practices. I also have hands-on experience with cloud computing through AWS, working with services such as EC2, S3, IAM, and CloudWatch, with a focus on cloud architecture, infrastructure provisioning, monitoring, and security best practices. My interests include distributed systems, cloud-native development, and building reliable, user-centric applications that transform real-world problems into efficient, production-ready digital solutions.
            </p>
          </div>

          <div className="about-columns">
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
          <h2 className="projects-title">MY PROJECTS</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <h3 className="project-card__title">{project.title}</h3>

                <button
                  type="button"
                  className="project-card__image-button"
                  onClick={() => openProjectModal(project)}
                  aria-label={`Open ${project.title} project details`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-card__image"
                  />
                </button>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section contact-section"
      >
        <div className="contact-section__inner">

          <h2 className="contact-title">LET’S CONNECT</h2>

          {/* Resume Button */}
          <a
            href="/ChristopherCooperResume.pdf"
            download
            className="resume-button"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/christopherbradleycooper"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-socials__link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Chris-B-Cooper"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-socials__link"
            >
              <FaGithub />
            </a>

            <button
              onClick={handleCopyEmail}
              className="contact-socials__link"
            >
              <FaEnvelope />
            </button>
          </div>
          {copied && <div className="copy-popup contact-popup">Email Copied!</div>}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeProjectModal}
          role="presentation"
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={closeProjectModal}
              aria-label="Close project modal"
            >
              <FaTimes />
            </button>

            <div className="project-modal__image-wrap">
              <img
                src={selectedProject.modalImage}
                alt={`${selectedProject.title} example`}
                className="project-modal__image"
              />
            </div>

            <div className="project-modal__footer">
              <h3 id="project-modal-title" className="project-modal__title">
                {selectedProject.title}
              </h3>
              <p className="project-modal__description">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;