import React from "react"

const Features = () => {
    const features = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
            title: "Custom Development",
            description: "Tailored web applications built with React, Node.js, Express, and MongoDB to meet your specific business needs.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Performance Optimization",
            description: "Lightning-fast applications with optimized code, efficient database queries, and modern deployment strategies.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
            title: "Security First",
            description: "Enterprise-grade security with authentication, authorization, data encryption, and secure API development.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
            title: "Scalable Architecture",
            description: "Future-proof solutions designed to grow with your business, handling increased traffic and data seamlessly.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: "Innovation Focus",
            description: "Cutting-edge technologies and best practices to keep your applications modern and competitive.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
            title: "24/7 Support",
            description: "Comprehensive maintenance and support services to ensure your applications run smoothly around the clock.",
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-balance">Why Choose Our MERN Stack Solutions?</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">We combine technical expertise with business understanding to deliver exceptional web applications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white/20 backdrop-blur-md hover:bg-white/30 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-200/30" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features