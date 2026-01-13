import lab2 from '../assets/lab2.png';
import lab3 from '../assets/lab3.png';
import lab4 from '../assets/lab4.png';
import pharmacy1 from '../assets/pharmacy1.png';
import pharmacy2 from '../assets/pharmacy2.png';
import pharmacy3 from '../assets/pharmacy3.png';
import whiskey1 from '../assets/Whiskey1.png';
import whiskey2 from '../assets/Whiskey2.png';
import emotion1 from '../assets/EMOTION1.png';
import emotion2 from '../assets/EMOTION2.png';

export const projects = [
    {
        id: 1,
        title: "Medi+ Lab Management System",
        category: "Web Applications",
        description: "A comprehensive system for managing laboratory inventory, equipment scheduling, and safety compliance.",
        images: [
            lab2,
            lab3,
            lab4
        ],
        overview: "This Laboratory Management System streamlines daily operations in research and educational labs. It tracks chemical inventory, manages equipment bookings, ensures safety compliance through digital checklists, and generates usage reports.",
        features: [
            "Chemical & Equipment Inventory Tracking",
            "Real-time Equipment Booking System",
            "Safety Data Sheet (SDS) Management",
            "User Role Management (Admin, Staff, Student)",
            "Automated Low-Stock Alerts"
        ],
        techStack: ["React", "Node.js", "MongoDB", "Express", "Material UI"],
        demoLink: "#",
        repoLink: "https://github.com/Thixuneana-github-2000/Lab-management--Project.git"
    },
    {
        id: 2,
        title: "Seth-Saha Pharmacy Mobile Application",
        category: "Mobile App",
        description: "A convenient mobile application for ordering medicines and managing prescriptions on the go.",
        images: [
            pharmacy1,
            pharmacy2,
            pharmacy3
        ],
        overview: "Make healthcare accessible with the Seth-Saha Pharmacy app. Users can easily browse medicines, upload prescriptions for quick processing, track their orders in real-time, and get health tips directly on their mobile device.",
        features: [
            "Easy Medicine Search & Ordering",
            "Digital Prescription Upload",
            "Real-time Order Tracking",
            "Secure Payment Options",
            "Health & Wellness Tips"
        ],
        techStack: ["Android Studio", "Firebase", "Java (Kotlin)", "XML"],
        demoLink: "#",
        repoLink: "https://github.com/Thixuneana-github-2000/MAD-mobile-development-project.git"
    },
    {
        id: 3,
        title: "Whiskey Ordering App",
        category: "UI/UX Design",
        description: "An advanced responsive UI/UX design for a premium whiskey ordering platform, created entirely in Figma.",
        images: [
            whiskey1,
            whiskey2
        ],
        overview: "This project showcases an advanced, high-fidelity design for a luxury whiskey e-commerce app. It focuses on creating a seamless and sophisticated user journey, from browsing rare collections to a secure checkout, all designed with pixel-perfect precision in Figma.",
        features: [
            "Hybrid Design Workflow (Figma & Adobe XD)",
            "Advanced Prototyping with Auto-Animate",
            "Comprehensive Design System & Components",
            "Responsive Layouts for Mobile & Web",
            "High-Fidelity Visuals & Asset Management"
        ],
        techStack: ["Figma", "Adobe XD"],
        demoLink: "#",
        repoLink: "https://www.figma.com/design/euTmCMbdtdmaRmtlC53jFi/Thisa-Ecom-v1?node-id=113-907&p=f&t=qhjF9KAEr13DT4L0-0"
    },
    {
        id: 4,
        title: "Emo-GPT - Emotion Based Search Engine",
        category: "UI/UX Design",
        description: "A research-driven UI/UX design for an emotion-based search engine, conceptualized and prototyped using Figma and Adobe XD.",
        images: [
            emotion1,
            emotion2
        ],
        overview: "This project is a research-based design exploration into affective computing interfaces. It focuses on how human emotion can translate into a search engine that adapts its results and visual language to the user's state of mind. The interface was rigorously tested and validated through user research.",
        features: [
            "Research-Based Interface Architecture",
            "Emotion Recognition Workflows",
            "Adaptive Visual Systems",
            "User-Centric Interaction Models",
            "High-Fidelity Prototyping (Figma & XD)"
        ],
        techStack: ["Figma", "Adobe XD"],
        demoLink: "#",
        repoLink: "https://www.figma.com/design/CcSwoH8E0nMSmPq5iu8slF/Research-Updated-version---emotion-based-search-engine?node-id=1126-2&t=Brmde9yu1btPYoJb-0"
    },
    {
        id: 5,
        title: "E-Commerce Platform",
        category: "Web Applications",
        description: "A full-stack shopping application with cart functionality, user authentication, and payment integration.",
        images: [
            "https://placehold.co/800x450/3b82f6/white?text=Main+Dashboard",
            "https://placehold.co/800x450/1e293b/white?text=Product+Page",
            "https://placehold.co/800x450/64748b/white?text=Cart+View"
        ],
        overview: "This comprehensive e-commerce solution provides a seamless shopping experience. Built with a focus on web performance and user accessibility, it allows users to browse products, manage their cart, and securely checkout.",
        features: [
            "User Authentication (Login/Register)",
            "Product Search and Filtering",
            "Shopping Cart with Persistent State",
            "Secure Payment Gateway Integration",
            "Admin Dashboard for Product Management"
        ],
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        id: 7,
        title: "Weather Dashboard",
        category: "Web Applications",
        description: "Real-time weather application connecting to external APIs to display forecasts with beautiful visualizations.",
        images: [
            "https://placehold.co/800x450/06b6d4/white?text=Weather+Overview",
            "https://placehold.co/800x450/164e63/white?text=Forecast+Chart",
            "https://placehold.co/800x450/67e8f9/white?text=Search+Locations"
        ],
        overview: "A sleek weather dashboard that delivers accurate real-time weather data and 7-day forecasts. It utilizes geolocation to provide local weather instantly and supports searching for cities worldwide.",
        features: [
            "Real-time Weather Data Integration",
            "5-Day / 3-Hour Forecasts",
            "Interactive Temperature Charts",
            "Geolocation Support",
            "Responsive Design for Mobile & Desktop"
        ],
        techStack: ["JavaScript", "OpenWeatherMap API", "Chart.js", "CSS3"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        id: 8,
        title: "Inventory Management System",
        category: "Desktop Applications",
        description: "A robust desktop application for managing stock levels, orders, and suppliers.",
        images: [
            "https://placehold.co/800x450/10b981/white?text=Dashboard",
            "https://placehold.co/800x450/064e3b/white?text=Stock+List",
            "https://placehold.co/800x450/6ee7b7/white?text=Reports"
        ],
        overview: "Designed for small to medium businesses, this desktop software simplifies inventory control. It offers automated low-stock alerts, detailed reporting, and supplier management.",
        features: [
            "Real-time Stock Tracking",
            "Automated Purchase Orders",
            "Supplier Management",
            "Sales & Profit Reporting",
            "Multi-user Access Control"
        ],
        techStack: ["Electron", "React", "SQLite", "Node.js"],
        demoLink: "#",
        repoLink: "#"
    }
];
