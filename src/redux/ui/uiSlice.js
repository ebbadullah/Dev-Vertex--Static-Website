import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: "blue",
    loading: false,
    sidebarOpen: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            // Cycle through themes: blue -> dark-blue -> blue
            if (state.theme === "blue") {
                state.theme = "dark-blue"
            } else {
                state.theme = "blue"
            }
        },
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen
        },
    },
})

export const { toggleTheme, setTheme, setLoading, toggleSidebar } = uiSlice.actions
export default uiSlice.reducer
