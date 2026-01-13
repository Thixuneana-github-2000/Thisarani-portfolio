import profileImg from "./assets/profile.jpeg";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  FaJs, FaPhp, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaReact, FaPython,
  FaDatabase, FaCode, FaLayerGroup
} from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';
import { projects } from './data/projects';
import './App.css';

const skills = [
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <FaLayerGroup />, color: '#ffffff' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
  { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'C++', icon: <FaCode />, color: '#00599C' },
  { name: 'C#', icon: <FaCode />, color: '#239120' },
];

const SkillCard = ({ name, icon, color }) => (
  <div className="skill-card" style={{ '--skill-color': color }}>
    <div className="skill-icon">{icon}</div>
    <span className="skill-name">{name}</span>
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project.id)}>
    <div className="project-image-preview">
      <img src={project.images[0]} alt={project.title} />
    </div>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.techStack.slice(0, 3).map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
    <div className="project-links">
      <button className="link-btn primary" style={{ width: '100%' }}>View Details</button>
    </div>
  </div>
);

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Web Applications', 'Mobile App', 'Desktop Applications'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">Thisarani<span className="text-primary">.</span></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="contact-btn">Hire Me</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="status-badge">
            <span className="dot"></span> Open to Work: Internships
          </div>
          <h1 className="hero-title">
            Passionate <span className="text-gradient">Software Engineer</span>
            <br />
            Building the Future
          </h1>
          <p className="hero-description">
            I'm a dedicated Computer Science student looking for a
            <strong> Software Engineer Intern</strong> opportunity.
            I specialize in full-stack development and solving complex problems with code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button primary">View Projects</a>
            <a href="#contact" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="image-placeholder">
            <img src={profileImg} alt="Thisarani Profile" />

          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(id) => navigate(`/project/${id}`)}
            />
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="section-title">My <span className="text-primary">Services</span></h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building responsive and performant web applications using modern technologies like React and Node.js.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing user interfaces that ensure a great user experience.</p>
          </div>
          <div className="service-card">
            <h3>Backend Systems</h3>
            <p>Developing robust server-side logic, databases, and APIs to power your applications.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Technical <span className="text-primary">Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <h2>Let's Work Together</h2>
          <p>I'm currently available for internship positions. If you have an exciting opportunity, I'd love to hear from you!</p>
          <a href="mailto:thashilananayakkara@gmail.com" className="cta-button primary big">Send an Email</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Thisarani. Built with React.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
