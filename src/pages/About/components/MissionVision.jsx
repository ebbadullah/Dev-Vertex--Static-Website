import React from "react"

const MissionVision = () => {
    const values = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Quality First",
            description: "We never compromise on quality. Every line of code is crafted with precision and tested thoroughly.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Innovation",
            description: "We stay ahead of technology trends and continuously adopt new tools and methodologies.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "Collaboration",
            description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
            title: "Security",
            description: "Security is built into every application we develop, protecting your data and users.",
        },
    ]

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">To empower businesses with cutting-edge web applications that drive growth, enhance user experience, and solve real-world problems. We believe technology should be accessible, scalable, and transformative.</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">Every project we undertake is an opportunity to create something meaningful that makes a positive impact on our clients' success and their users' lives.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">To be the leading MERN stack development partner for businesses worldwide, known for our technical excellence, innovative solutions, and unwavering commitment to client success.</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">We envision a future where every business, regardless of size, has access to world-class web applications that help them compete and thrive in the digital landscape.</p>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Core Values</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">The principles that guide everything we do</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto">{value.icon}</div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-4">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionVision