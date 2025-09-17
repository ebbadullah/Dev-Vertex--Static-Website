import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTypescript, SiTailwindcss, SiMui, SiExpress, SiMongodb, SiGraphql } from "react-icons/si";

const FullStack = () => {
    const services = [
        {
            title: "End-to-End Development",
            description: "Complete application development from concept to deployment",
            features: [
                "Requirements analysis and planning",
                "Frontend and backend development",
                "Database design and implementation",
                "API development and integration",
                "Testing and quality assurance"
            ]
        },
        {
            title: "MERN Stack Expertise",
            description: "Specialized development using MongoDB, Express, React, and Node.js",
            features: [
                "MongoDB database design and optimization",
                "Express.js server-side framework",
                "React.js frontend development",
                "Node.js runtime environment",
                "State management with Redux/Context API"
            ]
        },
        {
            title: "Cloud Integration",
            description: "Seamless deployment and scaling on cloud platforms",
            features: [
                "AWS/Azure/Google Cloud deployment",
                "Serverless architecture",
                "Containerization with Docker",
                "CI/CD pipeline setup",
                "Cloud infrastructure management"
            ]
        },
        {
            title: "Application Maintenance",
            description: "Ongoing support and enhancement of your applications",
            features: [
                "Bug fixing and troubleshooting",
                "Performance optimization",
                "Security updates and patches",
                "Feature enhancements",
                "Scaling for increased traffic"
            ]
        }
    ];

    const frontendTech = [
        { name: "React", icon: <FaReact className="text-sky-500 text-3xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-500 text-3xl" /> }
    ];

    const backendTech = [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-800 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-3xl" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500 text-3xl" /> },
        { name: "Docker", icon: <FaDocker className="text-sky-600 text-3xl" /> }
    ];

    const processSteps = [
        { step: "01", title: "Discovery", description: "We analyze your requirements and define the project scope." },
        { step: "02", title: "Planning", description: "We create a detailed roadmap and technical architecture." },
        { step: "03", title: "Development", description: "We build your application using agile methodologies." },
        { step: "04", title: "Testing", description: "We ensure quality through comprehensive testing." },
        { step: "05", title: "Deployment", description: "We launch your application and provide ongoing support." }
    ];

    return (
        <div className="min-h-screen pt-20">
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Full Stack Development <span className="text-blue-600 block mt-2">Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            End-to-end development services that cover both frontend and backend, delivering complete, scalable, and robust applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">Start Your Project</button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">View Our Work</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <img src="/src/assets/microservices-architecture.png" alt="Full Stack Development" className="rounded-xl shadow-2xl w-full" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Full Stack Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive development solutions for modern applications</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-start space-x-2 text-gray-700">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern technologies we use to build powerful applications</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frontend Technologies</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {frontendTech.map((tech, i) => (
                                    <div key={i} className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-lg transition-all duration-300">
                                        {tech.icon}
                                        <div className="font-medium text-gray-900 text-center mt-2">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Backend Technologies</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {backendTech.map((tech, i) => (
                                    <div key={i} className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-lg transition-all duration-300">
                                        {tech.icon}
                                        <div className="font-medium text-gray-900 text-center mt-2">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to delivering high-quality applications</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex-1 relative bg-blue-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">{step.step}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blue-600">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Full Stack Application?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Let's discuss your project requirements and create a custom solution for your business</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">Get Free Consultation</button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">View Our Portfolio</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FullStack;
