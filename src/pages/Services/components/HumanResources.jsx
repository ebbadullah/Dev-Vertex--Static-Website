import React from "react";

const HumanResources = () => {
  const services = [
    {
      title: "Recruitment & Staffing",
      description: "Find the right talent for your organization",
      features: [
        "Job requirement analysis",
        "Candidate sourcing and screening",
        "Interview coordination",
        "Background verification",
        "Onboarding assistance"
      ]
    },
    {
      title: "HR Management Systems",
      description: "Digital solutions for efficient HR operations",
      features: [
        "Employee database management",
        "Attendance and leave tracking",
        "Performance management",
        "Payroll integration",
        "Document management"
      ]
    },
    {
      title: "Training & Development",
      description: "Enhance employee skills and productivity",
      features: [
        "Training needs assessment",
        "Custom training program development",
        "E-learning platform implementation",
        "Skill gap analysis",
        "Performance tracking"
      ]
    },
    {
      title: "HR Consulting",
      description: "Expert guidance for HR challenges",
      features: [
        "HR policy development",
        "Compliance management",
        "Organizational restructuring",
        "Employee engagement strategies",
        "HR audit and assessment"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Human Resources <span className="text-blue-600 block mt-2">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive HR services to help you manage your most valuable asset - your people. From recruitment to retention, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">Schedule Consultation</button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">Learn More</button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img src="/src/assets/professional-woman-ceo.png" alt="Human Resources" className="rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our HR Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored solutions to optimize your human resource management</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our HR Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Benefits that make a difference to your organization</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise & Experience",
                description: "Our team of HR professionals brings years of industry experience across various sectors.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Customized Solutions",
                description: "We tailor our services to meet your specific organizational needs and challenges.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                title: "Technology-Driven",
                description: "We leverage the latest HR technologies to streamline processes and improve efficiency.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">{b.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your HR Operations Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Let our experts help you build a more efficient and effective HR function</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">Schedule a Free Consultation</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanResources;
