import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Services from "../pages/Services/Services"
import WebDevelopment from "../pages/Services/components/WebDevelopment"
import HumanResources from "../pages/Services/components/HumanResources"
import FullStack from "../pages/Services/components/FullStack"
import Blog from "../pages/Blog/Blog"
import BlogDetail from "../pages/Blog/BlogDetail"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Projects from "../pages/Project/Projects"
import ProjectDetails from "../pages/Project/component/ProjectDetails"
import Pricing from "../pages/Pricing/Pricing"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/hr" element={<HumanResources />} />
            <Route path="/services/fullstack" element={<FullStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes
