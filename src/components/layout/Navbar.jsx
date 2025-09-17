import React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../redux/ui/uiSlice"
import { FaCode } from "react-icons/fa"

const Navbar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { theme } = useSelector((state) => state.ui)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services", dropdown: true },
        { name: "Projects", path: "/projects" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ]

    const handleThemeToggle = () => {
        dispatch(toggleTheme())
    }

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isScrolled ? "py-2 sm:py-4" : "py-0"}`}
        >
            <div
                className={`transition-all duration-500 ${isScrolled
                        ? "mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-[85%] rounded-2xl sm:rounded-[999px] bg-white/80 backdrop-blur-xl shadow-2xl scale-95"
                        : "w-full bg-white/90 backdrop-blur-xl border-b border-blue-100/50 shadow-lg scale-100"
                    }`}
                style={{
                    transform: isScrolled ? "translateY(0)" : "translateY(0)",
                    transition: "transform 0.4s ease-out, border-radius 0.4s ease, width 0.4s ease",
                }}
            >
                <div className="flex justify-between items-center h-14 sm:h-16 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                <FaCode className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    DevVertex
                                </span>
                                <span className="text-xs text-blue-500 font-medium -mt-1 hidden sm:block">Development Hub</span>
                            </div>
                        </Link>

                        {/* Desktop Nav - Hidden on mobile and tablet */}
                        <div className="hidden xl:flex items-center space-x-2 ml-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        to={item.path}
                                        onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                                        onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
                                        className={`px-3 lg:px-5 py-2 lg:py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${location.pathname === item.path
                                                ? "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-200"
                                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                            } flex items-center relative overflow-hidden`}
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        {item.dropdown && (
                                            <svg
                                                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {item.dropdown && isServicesOpen && (
                                        <div
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                            className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-2xl shadow-blue-100/50 overflow-hidden"
                                        >
                                            <div className="p-2">
                                                <Link
                                                    to="/services/web-development"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                                                >
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    Web Development
                                                </Link>
                                                <Link
                                                    to="/services/hr"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                                                >
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    Human Resources
                                                </Link>
                                                <Link
                                                    to="/services/fullstack"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                                                >
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    Full Stack Development
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Responsive buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <Link
                            to="/contact"
                            className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm font-semibold text-blue-600 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span className="hidden lg:inline">Get In Touch</span>
                            <span className="lg:hidden">Contact</span>
                        </Link>

                        <button
                            onClick={handleThemeToggle}
                            className="p-2 sm:p-3 rounded-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="xl:hidden p-2 sm:p-3 rounded-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-xl rounded-b-2xl sm:rounded-b-none">
                        <div className="p-4 space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 text-base font-medium"
                                    >
                                        <span>{item.name}</span>
                                        {item.dropdown && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        )}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            <Link
                                                to="/services/web-development"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                            >
                                                Web Development
                                            </Link>
                                            <Link
                                                to="/services/hr"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                            >
                                                Human Resources
                                            </Link>
                                            <Link
                                                to="/services/fullstack"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                            >
                                                Full Stack Development
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full mt-4 px-4 py-4 text-center text-blue-600 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl transition-all duration-300 font-semibold"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
