import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Prato } from "../../pages/Home"

type CartState = {
    items: Prato[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Prato>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer