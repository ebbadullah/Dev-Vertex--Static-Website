"use client"
import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setTheme } from "../redux/ui/uiSlice"

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch() 
  const { theme } = useSelector((state) => state.ui)

  useEffect(() => {
    // Initialize theme from localStorage or default to blue theme
    const savedTheme = localStorage.getItem("theme")
    const initialTheme = savedTheme || "blue"

    dispatch(setTheme(initialTheme))
    
    // Apply theme to all key elements
    const elementsToUpdate = [document.documentElement, document.body, document.getElementById('root')]
    
    elementsToUpdate.forEach(element => {
      if (element) {
        // Remove any existing theme classes
        element.classList.remove("dark", "blue", "dark-blue")
        // Add the initial theme class
        element.classList.add(initialTheme)
      }
    })
  }, [dispatch])

  useEffect(() => {
    // Update DOM and localStorage when theme changes
    // Remove any existing theme classes
    document.documentElement.classList.remove("dark", "blue", "dark-blue")
    // Add the current theme class
    document.documentElement.classList.add(theme)
    // Apply theme to body as well for better coverage
    document.body.classList.remove("dark", "blue", "dark-blue")
    document.body.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
