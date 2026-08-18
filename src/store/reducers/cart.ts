import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Prato } from "../../pages/Home"

type CartState = {
    items: Prato[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Prato>) => {
            const prato = state.items.find(item => item.id === action.payload.id)
            if (!prato) {
                state.items.push(action.payload)
            } else {
                alert("O item já foi adicionado")
            }
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer