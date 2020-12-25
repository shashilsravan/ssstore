import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, LIKE_ADD_ITEM, LIKE_REMOVE_ITEM} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {}}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)
            if (existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            }
            else{
                return{
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state, 
                shippingAddress: action.payload,
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        default:
            return state
    }
}

export const likeReducer = (state = { likeItems: []}, action) => {
    switch(action.type){
        case LIKE_ADD_ITEM:
            const item = action.payload
            const existItem = state.likeItems.find(x => x.product === item.product)
            if (existItem){
                return {
                    ...state, likeItems: state.likeItems.map(x => x.product === existItem.product ? item : x)
                }
            }
            else{
                return{
                    ...state, likeItems: [...state.likeItems, item]
                }
            }
        case LIKE_REMOVE_ITEM:
            return {
                ...state, likeItems: state.likeItems.filter(x => x.product !== action.payload)
            }
        default:
            return state
    }
}


