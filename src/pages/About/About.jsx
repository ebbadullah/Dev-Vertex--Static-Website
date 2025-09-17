import React from "react"
import { Helmet } from "react-helmet"
import TeamSection from "./components/TeamSection"
import MissionVision from "./components/MissionVision"

const About = () => {
    const stats = [
        { number: "24+", label: "Projects Completed" },
        { number: "20+", label: "Happy Clients" },
        { number: "2+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" },
    ]

    const timeline = [
        { year: "2019", title: "Company Founded", description: "Started as a small team of passionate developers with a vision to create exceptional web applications." },
        { year: "2020", title: "First Major Client", description: "Delivered our first enterprise-level application, establishing our reputation for quality and reliability." },
        { year: "2021", title: "Team Expansion", description: "Grew our team to include specialized roles in DevOps, UI/UX design, and project management." },
        { year: "2022", title: "100 Projects Milestone", description: "Celebrated completing our 100th project, serving clients across various industries worldwide." },
        { year: "2023", title: "Innovation Focus", description: "Invested heavily in R&D, adopting cutting-edge technologies and development methodologies." },
        { year: "2024", title: "Global Expansion", description: "Expanded our services globally, helping businesses of all sizes transform digitally." },
    ]

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Dev Vertex - About Us | Our Team & Mission</title>
                <meta name="description" content="Learn about Dev Vertex's journey, our passionate team of developers, and our mission to create exceptional web applications." />
                <meta name="keywords" content="about us, web development team, Dev Vertex history, company mission" />
            </Helmet>
            <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">About Our<span className="text-primary block mt-2">MERN Stack Journey</span></h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-balance leading-relaxed">We're a passionate team of developers dedicated to creating exceptional web applications that drive business success and user satisfaction.</p>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
                        <p className="text-xl text-muted-foreground text-balance">From humble beginnings to industry leaders</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">Founded in 2019 by a group of passionate developers, our company began with a simple yet ambitious goal: to help businesses harness the power of modern web technologies to achieve their objectives and connect with their audiences in meaningful ways.</p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">What started as a small team working on local projects has evolved into a comprehensive development agency serving clients worldwide. Our expertise in the MERN stack (MongoDB, Express.js, React, Node.js) has enabled us to deliver scalable, performant, and user-friendly applications across various industries.</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">Today, we're proud to have completed over 100 projects, built lasting relationships with 50+ clients, and maintained our commitment to quality, innovation, and client success. Every project we undertake is an opportunity to push boundaries and create something exceptional.</p>
                    </div>
                </div>
            </section>

            <MissionVision />

            <section className="py-20 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Journey</h2>
                        <p className="text-xl text-muted-foreground text-balance">Key milestones in our company's growth</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative flex items-start space-x-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg relative z-10">{item.year}</div>
                                    <div className="flex-1 min-w-0 pb-8">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TeamSection />

            <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">Ready to Work Together?</h2>
                    <p className="text-xl text-primary-foreground/90 mb-8 text-balance">Let's discuss your project and see how we can help bring your vision to life</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">Start a Project</button>
                        <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About