import React from "react"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import { Helmet } from "react-helmet"

const Contact = () => {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
            <Helmet>
                <title>Dev Vertex - Contact | Contact Us</title>
                <meta name="description" content="Dev Vertex offers professional web development services, custom solutions, and digital transformation for businesses of all sizes." />
                <meta name="keywords" content="web development, custom websites, digital solutions, Dev Vertex" />
            </Helmet>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Let's Build Something Amazing Together</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">Ready to transform your ideas into powerful web applications? Get in touch with our team and let's discuss how we can help bring your vision to life.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2"><ContactForm /></div>
                    <div className="lg:col-span-1"><ContactInfo /></div>
                </div>

                <div className="mt-20">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-200/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/30 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                            <div className="space-y-6">
                                <div className="border-b border-blue-200/50 pb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">How long does a typical project take?</h4>
                                    <p className="text-gray-600">Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.</p>
                                </div>
                                <div className="border-b border-blue-200/50 pb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support and maintenance?</h4>
                                    <p className="text-gray-600">Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your application running smoothly.</p>
                                </div>
                                <div className="border-b border-blue-200/50 pb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">What technologies do you specialize in?</h4>
                                    <p className="text-gray-600">We specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with modern tools like Next.js, TypeScript, Tailwind CSS, and cloud deployment platforms.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Can you work with our existing team?</h4>
                                    <p className="text-gray-600">We're experienced in collaborating with in-house teams, providing consulting, code reviews, and seamless integration with your existing development workflows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact