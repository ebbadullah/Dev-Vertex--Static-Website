import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { Helmet } from "react-helmet"
import { store } from "./redux/store"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ThemeProvider from "./components/ThemeProvider"
import "./index.css"

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              <Helmet>
                <title>Dev Vertex - Web Development Services</title>
                <meta name="description" content="Professional web development services by Dev Vertex" />
              </Helmet>
              <Navbar />
              <main>
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
    </Provider>
  )
}

export default App
