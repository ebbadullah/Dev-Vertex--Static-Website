import React from "react"
import { FaCode } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,.05),transparent_70%)]"></div>

            <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-blue-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="relative">
                            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-3xl flex items-center justify-center shadow-lg border border-white/50">
                            </div> */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur opacity-60 animate-pulse"></div>
                        </div>
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                <FaCode className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">DevVertex</span>
                                <span className="text-sm text-blue-500 font-medium -mt-1">Development Hub</span>
                            </div>
                        </Link>
                    </div>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Transforming digital landscapes with cutting-edge solutions and visionary design</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Let's Build Something Amazing</h3>
                        <p className="text-slate-600 mb-8 max-w-lg leading-relaxed text-lg">We're passionate about creating digital experiences that inspire, engage, and deliver results. Ready to bring your vision to life?</p>

                        <div className="flex space-x-4">
                            {[
                                { name: "Twitter", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                                { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                                { name: "Dribbble", icon: "M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.415-7.825-1.484-.126-.315-.252-.63-.315-.945 2.329-1.274 3.362-2.206 3.867-3.269zM12 2.138c2.329 0 4.658.882 6.302 2.138-.441.945-1.274 1.61-3.236 2.642-.945-1.736-2.016-3.236-2.204-3.425C12.630 2.264 12.315 2.138 12 2.138zM9.796 3.425c.189.189 1.259 1.689 2.204 3.425-2.769 1.022-5.285 1.022-5.600 1.022C6.715 5.537 8.126 4.07 9.796 3.425zM2.138 12c0-.126 0-.252.063-.378 3.425.063 6.93-.378 7.825-.504.126.315.252.63.315.945-3.236 1.4-5.600 4.07-5.915 4.385C2.642 15.07 2.138 13.615 2.138 12zm2.769 6.302c.252-.315 2.329-2.769 5.285-3.992.945 2.454 1.337 4.511 1.400 5.096C9.418 20.160 6.967 19.552 4.907 18.302zM12 21.862c-1.400 0-2.769-.315-4.070-.882-.063-.504-.378-2.329-1.274-4.700 2.769-1.148 6.302-1.148 7.825-1.148.504 0 1.022.063 1.526.126-.315 2.454-1.400 4.826-1.400 5.096C13.615 21.547 12.819 21.862 12 21.862zM16.930 19.678c0-.252.882-2.454 1.148-4.826 1.526.378 2.769.945 3.236 1.148C20.160 17.748 18.748 19.048 16.930 19.678z" },
                            ].map((social, index) => (
                                <a key={index} href="#" className="group relative w-14 h-14 bg-gradient-to-br from-white to-slate-100 hover:from-blue-100 hover:to-cyan-100 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-600 hover:text-blue-700 transition-all duration-500 hover:scale-110 hover:shadow-lg border border-slate-200 hover:border-blue-300/50 shadow-sm">
                                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200/0 to-cyan-200/0 group-hover:from-blue-200/30 group-hover:to-cyan-200/30 rounded-2xl transition-all duration-500"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {["Home", "Services", "Blog", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="group flex items-center text-slate-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-2">
                                        <div className="w-2 h-2 bg-blue-400/70 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300"></div>
                                        <span className="text-lg group-hover:underline decoration-blue-400 underline-offset-4">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
                            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></div>Get in Touch
                        </h3>
                        <ul className="space-y-6 text-slate-600">
                            <li className="flex items-center space-x-4 group hover:text-blue-700 transition-colors duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-200 shadow-sm">
                                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg">devvertex@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-4 group hover:text-blue-700 transition-colors duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-200 shadow-sm">
                                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-lg">+92 (316) 029-8672</span>
                            </li>
                            <li className="flex items-start space-x-4 group hover:text-blue-700 transition-colors duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 border border-slate-200 shadow-sm">
                                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-lg">Balochistan, Quetta, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-300/50 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <p className="text-slate-600 text-lg">© 2024 Dev Vertex. All rights reserved.</p>
                    <div className="flex space-x-8">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                            <a key={item} href="#" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 text-lg hover:underline decoration-blue-400 underline-offset-4">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer