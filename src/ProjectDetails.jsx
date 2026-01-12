import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './App.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (project && project.images.length > 0) {
            setActiveImage(project.images[0]);
        }
    }, [project]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    return (
        <div className="project-details-page">
            <nav className="navbar scrolled">
                <div className="nav-content">
                    <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        Thisarani<span className="text-primary">.</span>
                    </div>
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <FaArrowLeft /> Back to Home
                    </button>
                </div>
            </nav>

            <div className="project-details-container">

                {/* Gallery Section */}
                <div className="project-gallery">
                    <div className="main-image-container">
                        <img src={activeImage} alt={project.title} className="main-image" />
                    </div>
                    <div className="thumbnail-list">
                        {project.images.map((img, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Section */}
                <div className="project-info">
                    <h1 className="details-title">{project.title}</h1>
                    <div className="details-badges">
                        <span className="category-badge">{project.category}</span>
                    </div>

                    <div className="info-block">
                        <h3>Project Overview</h3>
                        <p>{project.overview}</p>
                    </div>

                    <div className="info-block">
                        <h3>Key Features</h3>
                        <ul className="features-list">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-block">
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="action-buttons">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="cta-button primary">
                            <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live Demo
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                            <FaGithub style={{ marginRight: '8px' }} /> View Source
                        </a>
                    </div>
                </div>

            </div>

            <footer className="footer">
                <p>© 2026 Thisarani. Built with React.</p>
            </footer>
        </div>
    );
};

export default ProjectDetails;
