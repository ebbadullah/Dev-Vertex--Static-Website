import React from "react"

const ServiceList = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Full-Stack Web Development",
      description: "Complete MERN stack applications from concept to deployment",
      features: [
        "React.js frontend development",
        "Node.js & Express.js backend",
        "MongoDB database design",
        "RESTful API development",
        "Authentication & authorization",
        "Payment gateway integration",
      ],
      timeline: "4-12 weeks",
      startingPrice: "$5,000",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for all devices",
      features: [
        "Mobile-first responsive design",
        "Progressive Web App (PWA)",
        "Cross-browser compatibility",
        "Performance optimization",
        "SEO optimization",
        "Accessibility compliance",
      ],
      timeline: "2-6 weeks",
      startingPrice: "$2,500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "API Development & Integration",
      description: "Secure and scalable API solutions for your business needs",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Third-party integrations",
        "API documentation",
        "Rate limiting & security",
        "Microservices architecture",
      ],
      timeline: "3-8 weeks",
      startingPrice: "$3,500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Speed up your existing applications for better user experience",
      features: [
        "Code optimization & refactoring",
        "Database query optimization",
        "Caching strategies",
        "CDN implementation",
        "Bundle size optimization",
        "Performance monitoring",
      ],
      timeline: "2-4 weeks",
      startingPrice: "$2,000",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Ongoing support to keep your applications running smoothly",
      features: [
        "24/7 monitoring & support",
        "Regular security updates",
        "Bug fixes & improvements",
        "Feature enhancements",
        "Backup & disaster recovery",
        "Performance monitoring",
      ],
      timeline: "Ongoing",
      startingPrice: "$500/month",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Technical Consulting",
      description: "Expert guidance for your technology decisions and architecture",
      features: [
        "Technology stack consultation",
        "Architecture planning",
        "Code review & audit",
        "Performance analysis",
        "Security assessment",
        "Team training & mentoring",
      ],
      timeline: "1-4 weeks",
      startingPrice: "$150/hour",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Comprehensive MERN stack solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                <div>
                  <div className="text-sm text-gray-500">Starting at</div>
                  <div className="text-lg font-semibold text-blue-600">{service.startingPrice}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="text-sm font-medium text-gray-900">{service.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceList