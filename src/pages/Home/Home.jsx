import React from "react"
import { Helmet } from "react-helmet"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Dev Vertex - Home | Web Development Services</title>
                <meta name="description" content="Dev Vertex offers professional web development services, custom solutions, and digital transformation for businesses of all sizes." />
                <meta name="keywords" content="web development, custom websites, digital solutions, Dev Vertex" />
            </Helmet>
            <HeroSection />
            <Features />
            <Testimonials />

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="absolute top-10 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-balance">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-slate-700 mb-8 text-balance leading-relaxed">
                        Let's discuss your project and create something amazing together
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white hover:bg-blue-700 border border-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30">
                            Start Your Project
                        </button>
                        <button className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 bg-white/80">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home