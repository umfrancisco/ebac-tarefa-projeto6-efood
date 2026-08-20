import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Prato } from "../../pages/Home"

type CartState = {
    items: Prato[]
    isOpen: boolean
    checkout: number
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    checkout: 0
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
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        forward: (state) => {
            state.checkout = state.checkout + 1
        },
        backward: (state) => {
            state.checkout = state.checkout - 1
        }
    }
})

export const { add, remove, open, close, forward, backward } = cartSlice.actions
export default cartSlice.reducer