import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Restaurant } from "../pages/Home"

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => "restaurantes"
        }),
        getRestaurantById: builder.query<Restaurant, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
export default api