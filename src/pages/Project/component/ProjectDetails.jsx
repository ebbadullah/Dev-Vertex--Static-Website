import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            {
                id: '1',
                title: 'E-Commerce Platform',
                description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order management.',
                fullDescription: 'This comprehensive e-commerce solution was built using the MERN stack (MongoDB, Express.js, React, Node.js) to provide a seamless shopping experience. The platform includes advanced features such as real-time inventory management, secure payment processing through Stripe, user authentication, order tracking, and an intuitive admin dashboard for product and order management.',
                image: '../../assets/modern-tech-workspace-with-coding-elements-and-blu.jpg',
                category: 'Web Development',
                client: 'RetailTech Solutions',
                completionDate: 'June 2023',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe API'],
                features: [
                    'Responsive design for all devices',
                    'User authentication and profiles',
                    'Product search and filtering',
                    'Shopping cart and wishlist',
                    'Secure payment processing',
                    'Order tracking and history',
                    'Admin dashboard for inventory management'
                ],
                results: [
                    '35% increase in online sales',
                    '28% reduction in cart abandonment',
                    '40% faster checkout process',
                    'Improved inventory accuracy by 45%'
                ],
                testimonial: {
                    quote: "The e-commerce platform transformed our online business. Sales have increased significantly, and customer feedback has been overwhelmingly positive.",
                    author: "Sarah Johnson",
                    position: "CEO, RetailTech Solutions"
                },
                gallery: [
                    '../../assets/modern-tech-workspace-with-coding-elements-and-blu.jpg',
                    '../../assets/modern-tech-developer-workspace-with-coding-elemen.jpg',
                    '../../assets/placeholder.jpg'
                ]
            },
            {
                id: '2',
                title: 'HR Management System',
                description: 'A comprehensive HR system for employee management, attendance tracking, performance reviews, and payroll processing.',
                fullDescription: 'This HR Management System streamlines all aspects of human resources operations. Built with React and Node.js, it features modules for employee onboarding, time tracking, performance evaluation, payroll processing, and benefits administration. The system includes customizable dashboards, automated workflows, and comprehensive reporting tools.',
                image: '../../assets/modern-tech-developer-workspace-with-coding-elemen.jpg',
                category: 'Full Stack',
                client: 'Corporate Solutions Inc.',
                completionDate: 'August 2023',
                technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redux'],
                features: [
                    'Employee self-service portal',
                    'Automated attendance tracking',
                    'Performance review system',
                    'Payroll processing',
                    'Benefits administration',
                    'Leave management',
                    'Reporting and analytics'
                ],
                results: [
                    '40% reduction in HR administrative tasks',
                    '30% improvement in employee data accuracy',
                    '25% faster onboarding process',
                    'Improved compliance with labor regulations'
                ],
                testimonial: {
                    quote: "The HR system has transformed our human resources department. What used to take days now takes minutes, and our employees love the self-service features.",
                    author: "Michael Chen",
                    position: "HR Director, Corporate Solutions Inc."
                },
                gallery: [
                    '../../assets/modern-tech-developer-workspace-with-coding-elemen.jpg',
                    '../../assets/placeholder.jpg',
                    '../../assets/diverse-designers-brainstorming.png'
                ]
            },
            {
                id: '3',
                title: 'Real Estate Marketplace',
                description: 'A platform connecting property buyers, sellers, and agents with advanced search, virtual tours, and mortgage calculators.',
                fullDescription: 'This real estate marketplace revolutionizes property buying and selling with its intuitive interface and powerful features. Built with React and Firebase, it offers property listings with high-quality images, virtual tours, advanced search filters, mortgage calculators, and direct messaging between buyers and sellers. The platform also includes agent profiles, neighborhood information, and market trend analysis.',
                image: '../../assets/placeholder.jpg',
                category: 'Web Development',
                client: 'PropertyConnect',
                completionDate: 'October 2023',
                technologies: ['React', 'Firebase', 'Google Maps API', 'Stripe'],
                features: [
                    'Advanced property search',
                    'Virtual property tours',
                    'Mortgage calculator',
                    'Agent directory',
                    'Saved searches and favorites',
                    'Direct messaging',
                    'Market trend analysis'
                ],
                results: [
                    '45% increase in property inquiries',
                    '30% reduction in time to sell properties',
                    '50% more user engagement compared to previous platform',
                    '35% increase in agent signups'
                ],
                testimonial: {
                    quote: "The platform has completely transformed how we connect buyers with properties. The virtual tours and advanced search features have significantly increased our conversion rates.",
                    author: "Alicia Rodriguez",
                    position: "CEO, PropertyConnect"
                },
                gallery: [
                    '../../assets/placeholder.jpg',
                    '../../assets/modern-tech-workspace-with-coding-elements-and-blu.jpg',
                    '../../assets/developer-working.png'
                ]
            },
            {
                id: '4',
                title: 'Inventory Management System',
                description: 'An automated inventory system with barcode scanning, stock alerts, supplier management, and sales analytics.',
                fullDescription: 'This inventory management system provides businesses with complete control over their stock. Built with the MERN stack, it features barcode scanning for quick product identification, real-time stock level tracking, automated reorder notifications, supplier management, and comprehensive sales analytics. The system integrates seamlessly with point-of-sale systems and e-commerce platforms.',
                image: '../../assets/developer-working.png',
                category: 'Full Stack',
                client: 'SupplyChain Pro',
                completionDate: 'December 2023',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
                features: [
                    'Barcode scanning and generation',
                    'Real-time inventory tracking',
                    'Automated reorder notifications',
                    'Supplier management',
                    'Sales and inventory analytics',
                    'Multi-location support',
                    'Integration with e-commerce platforms'
                ],
                results: [
                    '50% reduction in stockouts',
                    '40% improvement in inventory accuracy',
                    '30% reduction in carrying costs',
                    '25% increase in inventory turnover'
                ],
                testimonial: {
                    quote: "This system has eliminated our inventory headaches. We now have real-time visibility into our stock levels across all locations, and the analytics have helped us optimize our purchasing decisions.",
                    author: "David Wilson",
                    position: "Operations Manager, SupplyChain Pro"
                },
                gallery: [
                    '../../assets/developer-working.png',
                    '../../assets/placeholder.jpg',
                    '../../assets/modern-tech-developer-workspace-with-coding-elemen.jpg'
                ]
            },
            {
                id: '5',
                title: 'Recruitment Portal',
                description: 'An end-to-end recruitment solution with job posting, applicant tracking, interview scheduling, and onboarding tools.',
                fullDescription: 'This recruitment portal streamlines the entire hiring process from job posting to onboarding. Built with React and Node.js, it features customizable job listings, applicant tracking, resume parsing, interview scheduling, automated email communications, and onboarding workflow management. The system also includes analytics to track recruitment metrics and improve hiring efficiency.',
                image: '../../assets/diverse-designers-brainstorming.png',
                category: 'Human Resources',
                client: 'TalentAcquisition Inc.',
                completionDate: 'February 2024',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
                features: [
                    'Job posting and management',
                    'Applicant tracking system',
                    'Resume parsing and screening',
                    'Interview scheduling',
                    'Automated email communications',
                    'Onboarding workflow',
                    'Recruitment analytics'
                ],
                results: [
                    '35% reduction in time-to-hire',
                    '40% improvement in candidate quality',
                    '30% reduction in recruitment costs',
                    '45% increase in hiring manager satisfaction'
                ],
                testimonial: {
                    quote: "The recruitment portal has transformed our hiring process. We're finding better candidates faster, and the onboarding tools ensure new hires are productive from day one.",
                    author: "Jennifer Lee",
                    position: "Recruitment Director, TalentAcquisition Inc."
                },
                gallery: [
                    '../../assets/diverse-designers-brainstorming.png',
                    '../../assets/female-developer.png',
                    '../../assets/placeholder.jpg'
                ]
            },
            {
                id: '6',
                title: 'Learning Management System',
                description: 'An educational platform with course creation, student enrollment, progress tracking, and certification.',
                fullDescription: 'This learning management system provides a comprehensive solution for online education. Built with React and Node.js, it features course creation tools, student enrollment management, progress tracking, quizzes and assessments, discussion forums, and certification generation. The platform also includes analytics to track student engagement and course effectiveness.',
                image: '../../assets/female-developer.png',
                category: 'Web Development',
                client: 'EduTech Solutions',
                completionDate: 'April 2024',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3'],
                features: [
                    'Course creation and management',
                    'Student enrollment and tracking',
                    'Quizzes and assessments',
                    'Discussion forums',
                    'Progress tracking',
                    'Certification generation',
                    'Learning analytics'
                ],
                results: [
                    '40% increase in course completion rates',
                    '35% improvement in student satisfaction',
                    '50% reduction in administrative tasks',
                    '30% increase in course enrollments'
                ],
                testimonial: {
                    quote: "The learning management system has revolutionized how we deliver education. The intuitive interface and comprehensive features have significantly improved both the teaching and learning experience.",
                    author: "Robert Johnson",
                    position: "Director of Education, EduTech Solutions"
                },
                gallery: [
                    '../../assets/female-developer.png',
                    '../../assets/diverse-designers-brainstorming.png',
                    '../../assets/modern-tech-workspace-with-coding-elements-and-blu.jpg'
                ]
            }
        ]);
    }, []);

    const { id } = useParams();
    const project = projects?.find(p => p.id === id) || {
        id: '1',
        title: 'Project Not Found',
        description: 'The requested project could not be found.',
        fullDescription: 'Please check the URL or go back to the projects page.',
        image: '../../assets/placeholder.jpg',
        category: 'Unknown',
        client: 'N/A',
        completionDate: 'N/A',
        technologies: [],
        features: [],
        results: [],
        testimonial: { quote: "", author: "", position: "" },
        gallery: []
    };

    return (
        <div className="min-h-screen">
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-6">
                            <div>
                                <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Projects
                                </Link>
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
                                <p className="text-xl text-muted-foreground">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Project Overview</h2>
                                <div className="prose prose-lg max-w-none text-muted-foreground">
                                    <p>{project.fullDescription}</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
                                <ul className="space-y-4">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Results & Impact</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                                            <p className="text-card-foreground">{result}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Project Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {project.gallery.map((image, index) => (
                                        <div key={index} className="rounded-xl overflow-hidden border border-border/50 shadow-sm aspect-video">
                                            <img src={image} alt={`${project.title} gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                                <h3 className="text-xl font-semibold text-card-foreground mb-6">Project Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Client</h4>
                                        <p className="text-card-foreground">{project.client}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Category</h4>
                                        <p className="text-card-foreground">{project.category}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Completion Date</h4>
                                        <p className="text-card-foreground">{project.completionDate}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {project.testimonial && project.testimonial.quote && (
                                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border/50 shadow-sm">
                                    <h3 className="text-xl font-semibold text-foreground mb-6">Client Testimonial</h3>
                                    <div className="relative">
                                        <svg className="absolute top-0 left-0 w-8 h-8 text-primary/20 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p className="text-muted-foreground italic relative z-10">{project.testimonial.quote}</p>
                                        <div className="mt-6">
                                            <p className="text-foreground font-medium">{project.testimonial.author}</p>
                                            <p className="text-muted-foreground text-sm">{project.testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;