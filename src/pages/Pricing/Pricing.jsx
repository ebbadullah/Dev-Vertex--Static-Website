import React, { useState } from "react"
import { Plus, Minus, Check, X, Star, Zap, Shield, Rocket } from "lucide-react"
import { Helmet } from "react-helmet"

const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal and bank transfers. For annual subscriptions we can also issue invoices and support wire-transfer payments for enterprise accounts.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes — you can upgrade or downgrade anytime from your account dashboard. Upgrades take effect immediately and prorated charges/credits are applied automatically so you only pay for what you use.",
    },
    {
        question: "Do you offer refunds?",
        answer: "We provide a 14-day money-back guarantee for monthly and annual plans. For enterprise contracts, refunds and SLAs are handled case-by-case — contact our support to discuss options.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a 7-day free trial for all plans. No credit card required to start. You can explore all features and see which plan works best for your needs before committing.",
    },
    {
        question: "What kind of support do you provide?",
        answer: "We provide different levels of support based on your plan: Standard support (48h response), Priority support (24h response), and Premium 24/7 support. All plans include access to our knowledge base, video tutorials, and community forum.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle.",
    },
]

const Pricing = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggleFAQ = (index) => { setOpenIndex(openIndex === index ? null : index) }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-20">
             <Helmet>
                <title>Dev Vertex - Pricing | Web Development Pricings</title>
                <meta name="description" content="Dev Vertex offers professional web development services, custom solutions, and digital transformation for businesses of all sizes." />
                <meta name="keywords" content="web development, custom websites, digital solutions, Dev Vertex" />
            </Helmet>
            <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Zap size={16} /> Choose Your Perfect Plan
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">Full Stack Development Plans</h1>
                <p className="text-gray-600 text-xl leading-relaxed">Transform your ideas into reality with our comprehensive development solutions. Scale seamlessly as your business grows.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-32">
                <div className="group p-8 rounded-3xl border border-blue-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Star className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
                        <p className="text-gray-600 mb-6">Perfect for personal projects & MVPs</p>
                        <p className="text-5xl font-bold text-blue-600 mb-6">$49<span className="text-lg font-normal">/mo</span></p>
                        <ul className="space-y-4 mb-8 text-gray-700">
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Static Website Development</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Basic UI/UX Design</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Email Support</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>1 Revision</span></li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Get Started</button>
                    </div>
                </div>

                <div className="group p-8 rounded-3xl border border-blue-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Rocket className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Startup</h3>
                        <p className="text-gray-600 mb-6">Perfect for small businesses & startups</p>
                        <p className="text-5xl font-bold text-blue-600 mb-6">$99<span className="text-lg font-normal">/mo</span></p>
                        <ul className="space-y-4 mb-8 text-gray-700">
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Responsive Frontend Development</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Basic Backend API Development</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>1 Database Integration</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Standard Support (48h response)</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>2 Revisions per project</span></li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Get Started</button>
                    </div>
                </div>

                <div className="group p-8 rounded-3xl border-2 border-blue-500 bg-white shadow-2xl transform scale-105 hover:-translate-y-3 duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-10"></div>
                    <div className="relative z-10">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-6 shadow-lg">⭐ MOST POPULAR</div>
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional</h3>
                        <p className="text-gray-600 mb-6">For growing businesses & agencies</p>
                        <p className="text-5xl font-bold text-blue-600 mb-6">$249<span className="text-lg font-normal text-gray-600">/mo</span></p>
                        <ul className="space-y-4 mb-8 text-gray-700">
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Everything in Startup</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Advanced Frontend (React/Vue)</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Backend with Node.js/Python</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Database & API Integration</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Priority Support (24h response)</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>5 Revisions per project</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Basic DevOps Setup</span></li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">Get Started</button>
                    </div>
                </div>

                <div className="group p-8 rounded-3xl border border-blue-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Shield className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                        <p className="text-gray-600 mb-6">For large organizations & complex projects</p>
                        <p className="text-5xl font-bold text-blue-600 mb-6">$499<span className="text-lg font-normal">/mo</span></p>
                        <ul className="space-y-4 mb-8 text-gray-700">
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Everything in Professional</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Full Stack Development</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Microservices Architecture</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Advanced DevOps & CI/CD</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Real-time Features (WebSockets)</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>24/7 Premium Support</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Unlimited Revisions</span></li>
                            <li className="flex items-center gap-3"><Check className="text-green-500 flex-shrink-0" size={20} /><span>Custom Integrations</span></li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Compare All Plans</h2>
                    <p className="text-gray-600 text-lg">Choose the perfect plan that fits your needs and budget</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                                    <th className="text-left p-6 font-semibold text-gray-800">Features</th>
                                    <th className="text-center p-6">
                                        <div className="flex flex-col items-center"><Star className="text-blue-600 mb-2" size={24} /><span className="font-bold text-gray-800">Basic</span><span className="text-blue-600 font-bold">$49/mo</span></div>
                                    </th>
                                    <th className="text-center p-6">
                                        <div className="flex flex-col items-center"><Rocket className="text-blue-600 mb-2" size={24} /><span className="font-bold text-gray-800">Startup</span><span className="text-blue-600 font-bold">$99/mo</span></div>
                                    </th>
                                    <th className="text-center p-6 bg-blue-600 text-white relative">
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"><span className="bg-white text-blue-600 text-xs font-bold py-1 px-3 rounded-full">POPULAR</span></div>
                                        <div className="flex flex-col items-center mt-2"><Zap className="text-white mb-2" size={24} /><span className="font-bold">Professional</span><span className="font-bold">$249/mo</span></div>
                                    </th>
                                    <th className="text-center p-6">
                                        <div className="flex flex-col items-center"><Shield className="text-blue-600 mb-2" size={24} /><span className="font-bold text-gray-800">Enterprise</span><span className="text-blue-600 font-bold">$499/mo</span></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="p-6 font-medium text-gray-800">Frontend Development</td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-6 font-medium text-gray-800">Backend API Development</td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-6 font-medium text-gray-800">Database Integration</td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-6 font-medium text-gray-800">DevOps & CI/CD Setup</td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><Check className="text-green-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-6 font-medium text-gray-800">24/7 Premium Support</td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-800">Custom Integrations</td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center bg-blue-50"><X className="text-red-500 mx-auto" size={20} /></td>
                                    <td className="p-6 text-center"><Check className="text-green-500 mx-auto" size={20} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-blue-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200">
                            <button onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index} className="w-full flex items-start justify-between px-8 py-6 text-left text-gray-800 font-medium hover:bg-blue-50 transition-all duration-300">
                                <div className="pr-4 flex-1"><div className="text-lg font-semibold text-gray-800">{faq.question}</div></div>
                                <div className="flex-shrink-0 flex items-center justify-center ml-2">
                                    <div className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                        {openIndex === index ? <Minus size={24} className="text-blue-600" /> : <Plus size={24} className="text-blue-600" />}
                                    </div>
                                </div>
                            </button>

                            <div className={`px-8 pb-6 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={openIndex !== index}>
                                <div className="border-t border-blue-100 pt-4"><p className="leading-relaxed text-gray-700">{faq.answer}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-8 text-lg">Join thousands of satisfied customers who trust us with their development needs. Contact our team for a personalized consultation.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">Start Free Trial</button>
                    <button className="px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">Request Custom Quote</button>
                </div>
            </div>

            <div className="h-20" />
        </div>
    )
}

export default Pricing