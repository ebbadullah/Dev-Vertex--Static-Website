import React from "react"

import ServiceList from "./components/ServiceList"
import ServiceBenefits from "./components/ServiceBenefits "

const Services = () => {
    const faqs = [
        {
            question: "What technologies do you use in your MERN stack development?",
            answer:
                "We use MongoDB for database, Express.js for backend framework, React.js for frontend, and Node.js for runtime environment. We also integrate modern tools like Redux for state management, JWT for authentication, and various deployment platforms.",
        },
        {
            question: "How long does it typically take to complete a project?",
            answer:
                "Project timelines vary based on complexity. Simple applications take 4-6 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase and keep you updated throughout development.",
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer:
                "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans start at $500/month and can be customized based on your needs.",
        },
        {
            question: "Can you integrate with existing systems and third-party APIs?",
            answer:
                "We specialize in integrating with existing systems, databases, and third-party services like payment gateways, CRM systems, social media APIs, and more. We ensure seamless data flow and functionality.",
        },
        {
            question: "What's included in the project deliverables?",
            answer:
                "All projects include complete source code, documentation, deployment guides, and basic training. We also provide post-launch support and can assist with hosting and deployment on platforms like AWS, Vercel, or Heroku.",
        },
        {
            question: "Do you offer custom pricing for large projects?",
            answer:
                "Yes, we provide flexible pricing for enterprise clients and large-scale projects. We can work with fixed-price contracts, hourly rates, or retainer agreements based on your preferences and project requirements.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                        Professional MERN Stack
                        <span className="text-blue-600 block mt-2">Development Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto text-balance leading-relaxed">
                        From concept to deployment, we deliver scalable web applications that drive business growth and user
                        engagement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Start Your Project
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <ServiceList />

            {/* Benefits Section - Replaces Pricing */}
            <ServiceBenefits />

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                            Our Development Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                            A proven methodology that ensures quality, transparency, and timely delivery
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Planning",
                                description: "We analyze your requirements, define project scope, and create a detailed roadmap.",
                            },
                            {
                                step: "02",
                                title: "Design & Architecture",
                                description: "UI/UX design and technical architecture planning for optimal performance.",
                            },
                            {
                                step: "03",
                                title: "Development & Testing",
                                description: "Agile development with continuous testing and regular progress updates.",
                            },
                            {
                                step: "04",
                                title: "Deployment & Support",
                                description: "Production deployment, training, and ongoing maintenance support.",
                            },
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4 mx-auto">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 text-balance">
                            Get answers to common questions about our services and process
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 text-balance">
                        Let's discuss your requirements and create a custom solution for your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Get Free Consultation
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                            View Our Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services