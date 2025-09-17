"use client"
import  React from "react"
import { useEffect, useState } from "react"

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(target)
    const incrementTime = Math.floor(duration / end)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}+</span>
}

const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  )
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Build the Future with",
      subtitle: "Modern Tech",
      description:
        "Transform your ideas into powerful, scalable web applications using cutting-edge technology. We deliver exceptional digital experiences that drive business growth.",
      primaryButton: "Start Your Project",
      secondaryButton: "View Our Work",
      stats: [
        { number: 24, label: "Projects Delivered" },
        { number: 20, label: "Happy Clients" },
        { number: 2, label: "Years Experience" },
      ],
    },
    {
      title: "Create Amazing",
      subtitle: "Digital Solutions",
      description:
        "From concept to deployment, we craft innovative web solutions that engage users and drive results. Experience the power of modern development frameworks.",
      primaryButton: "Get Started",
      secondaryButton: "Our Services",
      stats: [
        { number: 15, label: "Technologies" },
        { number: 98, label: "Success Rate" },
        { number: 5, label: "Team Members" },
      ],
    },
    {
      title: "Innovate with",
      subtitle: "Smart Design",
      description:
        "Beautiful, responsive, and user-friendly interfaces that work seamlessly across all devices. Let's bring your vision to life with stunning design.",
      primaryButton: "Start Building",
      secondaryButton: "Portfolio",
      stats: [
        { number: 50, label: "Components" },
        { number: 12, label: "Industries" },
        { number: 100, label: "Satisfaction" },
      ],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroSlides.leng
    
    ])

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl opacity-60 animate-blob-one"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/15 to-blue-500/15 rounded-full blur-3xl opacity-60 animate-blob-two"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-full blur-3xl opacity-60 animate-blob-three"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-slide-in-left" key={currentSlide}>
          <h1 className="mt-20 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 text-balance">
            {currentHero.title}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text block mt-2">
              <TypingAnimation text={currentHero.subtitle} speed={150} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto text-balance leading-relaxed">
            {currentHero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              {currentHero.primaryButton}
            </button>
            <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/20">
              {currentHero.secondaryButton}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {currentHero.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl border border-blue-200/30 hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text mb-2">
                  <Counter target={stat.number} duration={2000} />
                </div>
                <div className="text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-blue-200/30">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* Replaced fade-in animation with slide-in-left animation */
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-100px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        /* Blob animations for background shapes */
        @keyframes blob-one {
          0%, 100% { transform: translateY(0) scale(1); }
          33% { transform: translateY(-20px) scale(1.05); }
          66% { transform: translateY(20px) scale(0.95); }
        }
        @keyframes blob-two {
          0%, 100% { transform: translateX(0) scale(1); }
          33% { transform: translateX(20px) scale(1.08); }
          66% { transform: translateX(-20px) scale(0.92); }
        }
        @keyframes blob-three {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          33% { transform: translateY(15px) translateX(15px) scale(1.03); }
          66% { transform: translateY(-15px) translateX(-15px) scale(0.97); }
        }

        .animate-blob-one { animation: blob-one 8s ease-in-out infinite; }
        .animate-blob-two { animation: blob-two 10s ease-in-out infinite; }
        .animate-blob-three { animation: blob-three 12s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default HeroSection
