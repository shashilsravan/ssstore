import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {cartReducer, likeReducer} from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    like: likeReducer,
    userLogin: userLoginReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems'))
: []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const likeItemsFromStorage = localStorage.getItem('likeItems') 
? JSON.parse(localStorage.getItem('likeItems'))
: []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    like: { likeItems: likeItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const Store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default Store
