import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    services: [],
    pricingPlans: [],
    loading: false,
    error: null,
}

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        fetchServicesStart: (state) => {
            state.loading = true
        },
        fetchServicesSuccess: (state, action) => {
            state.loading = false
            state.services = action.payload
        },
        fetchServicesFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        setPricingPlans: (state, action) => {
            state.pricingPlans = action.payload
        },
    },
})

export const { fetchServicesStart, fetchServicesSuccess, fetchServicesFailure, setPricingPlans } = servicesSlice.actions
export default servicesSlice.reducer
