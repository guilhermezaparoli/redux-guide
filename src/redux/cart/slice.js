import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log("entrou", state);


            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);

            if (productIsAlreadyInCart) {


                state.products = state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        }
                    }
                    return product
                })
                  return  
                }




            state.products = [...state.products, { ...action.payload, quantity: 1 }]


        },
        increaseProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload) {
                    product.quantity += 1
                }
                return product
            })
        },
        decreaseProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload) {
                    product.quantity -= 1
                }
                return product
            }).filter((product) => product.quantity > 0)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        }
    },
})

export const { addProduct, increaseProduct, decreaseProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer;