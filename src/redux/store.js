import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import blogSlice from "./blog/blogSlice"
import servicesSlice from "./services/servicesSlice"
import uiSlice from "./ui/uiSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        blog: blogSlice,
        services: servicesSlice,
        ui: uiSlice,
    },
})
