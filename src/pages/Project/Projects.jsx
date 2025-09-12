import React, { useState } from "react";
import ProjectCard from "./component/ProjectCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        { id: "1", title: "E-Commerce Platform", description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order management.", image: "../../assets/modern-tech-workspace-with-coding-elements-and-blu.jpg", category: "Web Development", technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"] },
        { id: "2", title: "HR Management System", description: "A comprehensive HR system for employee management, attendance tracking, performance reviews, and payroll processing.", image: "../../assets/modern-tech-developer-workspace-with-coding-elemen.jpg", category: "Full Stack", technologies: ["React", "Node.js", "PostgreSQL", "Express", "Redux"] },
        { id: "3", title: "Real Estate Marketplace", description: "A platform connecting property buyers, sellers, and agents with advanced search, virtual tours, and mortgage calculators.", image: "../../assets/placeholder.jpg", category: "Web Development", technologies: ["React", "Firebase", "Google Maps API", "Stripe"] },
        { id: "4", title: "Inventory Management System", description: "An automated inventory system with barcode scanning, stock alerts, supplier management, and sales analytics.", image: "../../assets/developer-working.png", category: "Full Stack", technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"] },
        { id: "5", title: "Recruitment Portal", description: "An end-to-end recruitment solution with job posting, applicant tracking, interview scheduling, and onboarding tools.", image: "../../assets/diverse-designers-brainstorming.png", category: "Human Resources", technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"] },
        { id: "6", title: "Learning Management System", description: "An educational platform with course creation, student enrollment, progress tracking, and certification.", image: "../../assets/female-developer.png", category: "Web Development", technologies: ["React", "Node.js", "MongoDB", "Express", "AWS S3"] }
    ];

    const categories = ["all", "Web Development", "Full Stack", "Human Resources"];
    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="bg-gray-50 min-h-screen">
             <Helmet>
                <title>Dev Vertex - Projects | Web Development Services</title>
                <meta name="description" content="Dev Vertex offers professional web development services, custom solutions, and digital transformation for businesses of all sizes." />
                <meta name="keywords" content="web development, custom websites, digital solutions, Dev Vertex" />
            </Helmet>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-6 lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">Explore our portfolio of successful projects delivered with precision, innovation, and technical excellence.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button key={category} onClick={() => setFilter(category)} className={`px-6 py-2 rounded-full transition-all ${filter === category ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`}>
                            {category === "all" ? "All Projects" : category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredProjects.map(p => <ProjectCard key={p.id} project={p} />)}</div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-2xl font-medium text-gray-700">No projects found</h3>
                        <p className="text-gray-500 mt-2">Try selecting a different category</p>
                    </div>
                )}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 lg:px-8 mt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help bring your vision to life with our expertise in web development, full stack solutions, and HR systems.</p>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                        Get in Touch
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
