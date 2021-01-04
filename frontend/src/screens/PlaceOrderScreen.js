import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckOutSteps from '../components/CheckOutSteps';
import { CART_RESET } from '../constants/cartConstants';
import Meta from '../minicomponents/Meta'


export default function PlaceOrderScreen({history}) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    const cartItems = useSelector(state => state.cart.cartItems)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    // calculate prices
    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    cart.shippingPrice = cart.itemsPrice > 500 ? 0 : 5
    cart.totalPrice = addDecimals(Number(cart.itemsPrice) + Number(cart.shippingPrice))

    const orderCreate = useSelector(state => state.orderCreate)
    const {order, success, error} = orderCreate

    useEffect(() => {
        if (cartItems.length === 0){
            history.push('/cart')
        }
        if (!userInfo){
            history.push('/login')
        }
        if (success){
            localStorage.removeItem('cartItems')
            dispatch({ type: CART_RESET })
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history, success, cartItems, userInfo])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice
        }))
    }

    return (
        <div className="my-5">
            <Meta title="Chaotic | Placing Order" />
            <CheckOutSteps step1 step2 step3 step4 />
            <div className="row">
                <div className="col-md-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h4>Shipping details: </h4>
                            <p>
                                <strong> Address: </strong>
                                <br />
                                {cart.shippingAddress.address},
                                <br />
                                City: {cart.shippingAddress.city}
                                <br />
                                State: {cart.shippingAddress.arena}
                                <br />
                                Pin Code: {cart.shippingAddress.postalCode}
                                <br />
                                Phone num: <strong>{cart.shippingAddress.phone}</strong>
                            </p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="d-flex align-items-center">Payment Mode: &nbsp;
                                <strong>{cart.paymentMethod ? cart.paymentMethod
                                : (
                                    <Link className="ml-2 btn btn-block btn-dark" to='/payment'>Select Payment Method</Link>
                                ) }</strong>
                            </h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Ordered Items: </h5>
                            {cart.cartItems.length === 0 
                            ?   <div className="alert alert-danger" role="alert">
                                    Something went wrong. Please try again from cart page
                                </div> 
                            : (
                                <ul className="list-group list-group-flush">
                                    {cart.cartItems.map((item, index) => (
                                        <li className="list-group-item" key={index}>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={item.image} className="img-fluid" alt={item.name}/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="text-uppercase"><Link to={`/product/${item.product}`} className="text-dark text-decoration-none">
                                                        {item.name}
                                                    </Link></h6>
                                                    {item.isDress 
                                                    ? <strong>Size: {item.size}</strong>
                                                    : null}
                                                </div>
                                                <div className="col">
                                                    <strong>{item.qty} x {item.price}rs = {item.qty * item.price}rs</strong>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )
                            }
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="alert alert-primary fw-bold" role="alert">
                        Free delivery on orders above 500rs
                    </div>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h4>Order Summary: </h4>
                            </li>
                            <li className="list-group list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Items Price:
                                    </div>
                                    <div className="col">
                                        <strong>{cart.itemsPrice} rs</strong>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Shipping Amount:
                                    </div>
                                    <div className="col">
                                        {cart.shippingPrice === 0 
                                        ? '-/-' 
                                        : <strong> {cart.shippingPrice} rs </strong>}
                                    </div>
                                </div>
                            </li>
                            <li className="list-group list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Total Amount:
                                    </div>
                                    <div className="col">
                                        <strong>
                                            {cart.totalPrice} rs
                                        </strong>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group list-group-item">
                                {error && <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>}
                            </li>
                            <li className="list-group list-group-item">
                                <button
                                className="btn btn-success btn-block fw-bold"
                                onClick={placeOrderHandler}
                                disabled={cart.cartItems.length === 0}>
                                    Place order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


