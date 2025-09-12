import React, { useEffect, useState } from "react"

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

const AutoTypingCodeBox = () => {
  const codeSnippets = [
    `// Modern Web Development\nconst createApp = () => {\n  const server = express();\n  server.use(middleware());\n  return server;\n};`,
    `// Component Architecture\nconst Dashboard = () => {\n  const [data, setData] = useState([]);\n  \n  return (\n    <div className="dashboard">\n      {data.map(item => \n        <Card key={item.id} />\n    </div>\n  );\n};`,
    `// Database Integration\nconst fetchUserData = async () => {\n  try {\n    const users = await db.collection('users')\n      .find({ active: true })\n      .sort({ createdAt: -1 })\n      .limit(20);\n    return users;\n  } catch (error) {\n    console.error(error);\n  }\n};`,
    `// API Development\napp.post('/api/auth/login', async (req, res) => {\n  const { email, password } = req.body;\n  \n  const user = await User.findOne({ email });\n  if (user && await bcrypt.compare(password, user.hash)) {\n    const token = jwt.sign({ id: user._id }, SECRET);\n    res.json({ token, user });\n  } else {\n    res.status(401).json({ error: 'Invalid credentials' });\n  }\n});`,
  ]

  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]

    if (currentIndex < snippet.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + snippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30) 
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("")
        setCurrentIndex(0)
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, currentSnippet, codeSnippets])

  return (
    <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-80 lg:w-96 xl:w-[420px] h-80 lg:h-96 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-blue-400/20 shadow-2xl shadow-blue-500/10 p-6 hidden lg:block z-30 overflow-hidden">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-300 text-sm font-mono">app.js</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative h-full overflow-hidden">
        <pre className="text-blue-300 font-mono text-xs lg:text-sm leading-relaxed whitespace-pre-wrap">
          {displayText}
          <span className="animate-pulse text-blue-400 font-bold">|</span>
        </pre>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900/95 to-transparent pointer-events-none"></div>
      </div>

      <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-8 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: "1s" }}></div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Dynamic blurred background shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl opacity-60 animate-blob-one"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/15 to-blue-500/15 rounded-full blur-3xl opacity-60 animate-blob-two"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-full blur-3xl opacity-60 animate-blob-three"></div>

      <AutoTypingCodeBox />

      <div className="relative max-w-4xl lg:max-w-5xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 text-center z-10 lg:mr-[420px] xl:mr-[460px]">
        <div className="animate-fade-in">
          <h1 className="mt-20 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 text-balance">
            Build the Future with
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text block mt-2">
              <TypingAnimation text="Modern Tech" speed={150} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 max-w-2xl lg:max-w-3xl mx-auto text-balance leading-relaxed">
            Transform your ideas into powerful, scalable web applications using cutting-edge technology. We deliver exceptional digital experiences that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">Start Your Project</button>
            <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/20">View Our Work</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-2xl lg:max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl border border-blue-200/30 hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text mb-2"><Counter target={24} duration={2000} /></div>
              <div className="text-slate-700">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl border border-blue-200/30 hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text mb-2"><Counter target={20} duration={2000} /></div>
              <div className="text-slate-700">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl border border-blue-200/30 hover:bg-white/30 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mb-2"><Counter target={2} duration={2000} /></div>
              <div className="text-slate-700">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-blue-200/30">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
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