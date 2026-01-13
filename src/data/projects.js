import lab2 from '../assets/lab2.png';
import lab3 from '../assets/lab3.png';
import lab4 from '../assets/lab4.png';
import pharmacy1 from '../assets/pharmacy1.png';
import pharmacy2 from '../assets/pharmacy2.png';
import pharmacy3 from '../assets/pharmacy3.png';

export const projects = [
    {
        id: 6,
        title: "Lab Management System",
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
        repoLink: "#"
    },
    {
        id: 1,
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
        id: 2,
        title: "Task Management App",
        category: "Web Applications",
        description: "A productivity tool for managing daily tasks with drag-and-drop features and real-time updates.",
        images: [
            "https://placehold.co/800x450/8b5cf6/white?text=Task+Board",
            "https://placehold.co/800x450/4c1d95/white?text=Task+Details",
            "https://placehold.co/800x450/a78bfa/white?text=User+Settings"
        ],
        overview: "An intuitive task management application designed to boost productivity. It features a Trello-like board interface with drag-and-drop capabilities, real-time synchronization across devices, and collaborative team features.",
        features: [
            "Drag-and-Drop Kanban Board",
            "Real-time Updates using WebSockets",
            "Team Collaboration Tools",
            "Due Date Reminders",
            "Dark/Light Mode Toggle"
        ],
        techStack: ["React", "Firebase", "Tailwind CSS", "Context API"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        id: 3,
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
        id: 4,
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
        repoLink: "#"
    },
    {
        id: 5,
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
    },
    {
        id: 7,
        title: "Modern Banking App Redesign",
        category: "UI/UX Design",
        description: "A comprehensive UI/UX case study focusing on improving the user experience of a traditional banking application.",
        images: [
            "https://placehold.co/800x450/e11d48/white?text=App+redesign",
            "https://placehold.co/800x450/be123c/white?text=User+Flow",
            "https://placehold.co/800x450/9f1239/white?text=Design+System"
        ],
        overview: "This project involves a complete redesign of a mobile banking interface. The goal was to simplify complex financial operations, enhance accessibility, and create a modern, trustworthy visual identity.",
        features: [
            "User Research & Persona Development",
            "Information Architecture & Wireframing",
            "Interactive High-Fidelity Prototypes",
            "Design System Creation",
            "Usability Testing & Iteration"
        ],
        techStack: ["Figma", "Adobe XD", "Protopie", "Illustrator"],
        demoLink: "#",
        repoLink: "#"
    }
];
