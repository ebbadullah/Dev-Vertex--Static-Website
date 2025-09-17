import React, { useState, useEffect, useRef } from "react"
import { testimonials, companies } from "../../../assets/Data/teamData"

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const startX = useRef(0)
    const endX = useRef(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [testimonials.length])

    const handleStart = (x) => {
        setIsDragging(true)
        startX.current = x
    }

    const handleEnd = (x) => {
        setIsDragging(false)
        endX.current = x
        if (startX.current - endX.current > 50) {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        } else if (endX.current - startX.current > 50) {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        }
    }

    return (
        <>
            <style>{`
        /* ticker animation: translate the whole track left by 50% (we duplicate content for seamless loop) */
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* track that moves */
        .ticker-track {
          display: inline-flex;
          align-items: center;
          gap: 2rem; /* spacing between items */
        }

        .animate-ticker {
          animation: ticker-scroll 18s linear infinite;
        }

        /* pause on hover */
        .animate-ticker:hover {
          animation-play-state: paused;
        }

        /* item styling fallback when using plain CSS (Tailwind used for most styles) */
        /* mask on wrapper is applied inline to keep it flexible across backgrounds */
      `}</style>

            <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-balance">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
                            Hear from businesses across Pakistan that we’ve helped transform
                        </p>
                    </div>

                    <div
                        className="relative max-w-4xl mx-auto overflow-hidden select-none cursor-pointer"
                        onMouseDown={(e) => handleStart(e.clientX)}
                        onMouseUp={(e) => handleEnd(e.clientX)}
                        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
                    >
                        <div
                            className={`flex transition-transform duration-500 ease-in-out`}
                            style={{
                                transform: `translateX(-${currentTestimonial * 100}%)`,
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 bg-white/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/30 text-center"
                                >
                                    <div className="flex justify-center mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-6 h-6 text-blue-500 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic">
                                        "{item.content}"
                                    </blockquote>

                                    <div className="flex items-center justify-center space-x-4">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-300/50"
                                        />
                                        <div className="text-left">
                                            <div className="font-semibold text-slate-800 text-lg">{item.name}</div>
                                            <div className="text-slate-600">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center space-x-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-blue-200 hover:bg-blue-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 pt-16 border-t border-blue-200/50 relative">
                        <p className="text-center text-slate-600 mb-8 text-lg">
                            Trusted by innovative companies across Pakistan
                        </p>

                        <div
                            className="relative w-full overflow-hidden"
                            style={{
                                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            }}
                        >
                            <div className="ticker-track animate-ticker">
                                {companies.map((company, i) => (
                                    <div
                                        key={`c-${i}`}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/6 backdrop-blur-sm border border-white/6 text-slate-700 text-lg font-semibold whitespace-nowrap transform transition-all duration-300 hover:scale-105 hover:bg-white/12"
                                        style={{ filter: "grayscale(60%)", WebkitFilter: "grayscale(60%)" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = "grayscale(0%)"
                                            e.currentTarget.style.WebkitFilter = "grayscale(0%)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = "grayscale(60%)"
                                            e.currentTarget.style.WebkitFilter = "grayscale(60%)"
                                        }}
                                    >
                                        {company}
                                    </div>
                                ))}

                                {companies.map((company, i) => (
                                    <div
                                        key={`c-dup-${i}`}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/6 backdrop-blur-sm border border-white/6 text-slate-700 text-lg font-semibold whitespace-nowrap transform transition-all duration-300 hover:scale-105 hover:bg-white/12"
                                        style={{ filter: "grayscale(60%)", WebkitFilter: "grayscale(60%)" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = "grayscale(0%)"
                                            e.currentTarget.style.WebkitFilter = "grayscale(0%)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = "grayscale(60%)"
                                            e.currentTarget.style.WebkitFilter = "grayscale(60%)"
                                        }}
                                    >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
