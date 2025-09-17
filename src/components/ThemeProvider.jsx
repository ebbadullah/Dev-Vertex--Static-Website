import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setTheme } from "../redux/ui/uiSlice"

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector((state) => state.ui)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const initialTheme = savedTheme || "blue"

        dispatch(setTheme(initialTheme))

        const elementsToUpdate = [document.documentElement, document.body, document.getElementById('root')]

        elementsToUpdate.forEach(element => {
            if (element) {
                element.classList.remove("dark", "blue", "dark-blue")
                element.classList.add(initialTheme)
            }
        })
    }, [dispatch])

    useEffect(() => {
        document.documentElement.classList.remove("dark", "blue", "dark-blue")
        document.documentElement.classList.add(theme)
        document.body.classList.remove("dark", "blue", "dark-blue")
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return <>{children}</>
}

export default ThemeProvider
