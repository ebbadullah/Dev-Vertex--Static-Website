import React from "react";
import { Helmet } from "react-helmet";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss, SiFirebase } from "react-icons/si";

const WebDevelopment = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React",
      features: [
        "Custom React component development",
        "State management with Redux/Context API",
        "Responsive design for all devices",
        "Interactive UI with modern animations",
        "Performance optimization"
      ]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions with Node.js and Express",
      features: [
        "RESTful API development",
        "Authentication and authorization",
        "Database integration",
        "File handling and storage",
        "Server-side rendering"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online shopping experiences",
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Secure payment processing",
        "Order management system",
        "Customer account management"
      ]
    },
    {
      title: "CMS Development",
      description: "Custom content management systems",
      features: [
        "User-friendly admin interfaces",
        "Content creation and editing tools",
        "Media management",
        "User role management",
        "SEO optimization tools"
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-600 text-4xl" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
       <Helmet>
                      <title>Dev Vertex | Web Development Services</title>
                      <meta name="description" content="Dev Vertex offers professional web development services, custom solutions, and digital transformation for businesses of all sizes." />
                      <meta name="keywords" content="web development, custom websites, digital solutions, Dev Vertex" />
                  </Helmet>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web Development <span className="text-blue-600 block mt-2">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We create modern, responsive, and high-performance web applications that deliver exceptional user experiences and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">Get Started</button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">View Portfolio</button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img src="/src/assets/developer-working.png" alt="Web Development" className="rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive web solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-2 text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern tools and frameworks for building powerful web applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center">
                {tech.icon}
                <div className="font-medium text-gray-900 mt-2">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Web Development Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Let's discuss your requirements and create a custom solution for your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">Get Free Consultation</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">View Our Portfolio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
