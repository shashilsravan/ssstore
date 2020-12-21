import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom';
import { getOrderDetails, payOrder } from '../actions/orderActions';
import Loader from '../minicomponents/Loader';
import axios from 'axios'
import {ORDER_PAY_RESET} from '../constants/orderConstants'
import Step from '../minicomponents/Step'

export default function OrderScreen({match, history}) {
    
    const orderId = match.params.id
    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderDetails = useSelector(state => state.orderDetails)
    const { loading, error, order } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, error: errorPay, success: successPay } = orderPay

    
    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=INR`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if(!order || successPay){
            dispatch({ type: ORDER_PAY_RESET})
            dispatch(getOrderDetails(orderId))
        }
        else if (!order.isPaid){
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, orderId, order, successPay])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrder(orderId, paymentResult))
    }

    return (
        <div className="my-5">
            {loading ? <Loader />
            : error ? (<div className="alert alert-danger" role="alert">{error}</div>)
            : (
                <div className="row">
                    <div className="col-md-8">
                        <h5>Order details</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h4>Shipping details: </h4>
                                <p className="border p-2 bs-small mt-2">
                                    <i className="fas fa-user mx-1"></i> {order.user.name} &nbsp; || &nbsp; 
                                <i className="fas fa-envelope mx-1"></i> {order.user.email} </p>
                                <p>
                                    <strong> Address: </strong>
                                    
                                    {order.shippingAddress.address},
                                    {" "}{order.shippingAddress.city},
                                    {" "}{order.shippingAddress.arena},
                                    {" "}{order.shippingAddress.postalCode}
                                    <br />
                                    Phone number: <strong>{order.shippingAddress.phone}</strong>
                                </p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="d-flex align-items-center">Payment Mode: &nbsp;
                                <strong>{order.paymentMethod} </strong>
                            </h5>

                            {order.isPaid ? 
                            <div className="alert alert-success mt-2" role="alert">
                                Paid At {order.paidAt}
                            </div>
                            : <div className="alert alert-danger mt-2" role="alert">
                                Not paid
                            </div>}

                        </li>
                        <li className="list-group-item">
                            <h5>Ordered Items: </h5>
                            {order.orderItems.length === 0 
                            ?   <div className="alert alert-danger" role="alert">
                                    Something went wrong. Please try again from cart page
                                </div> 
                            : (
                                <ul className="list-group list-group-flush">
                                    {order.orderItems.map((item, index) => (
                                        <li className="list-group-item" key={index}>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={item.image} className="img-fluid" alt={item.name}/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="text-uppercase"><Link to={`/product/${item.product}`} className="text-dark text-decoration-none">
                                                        {item.name}
                                                    </Link></h6>
                                                    { item.isDress 
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
                            <div className="list-group-item">
                                <h5 className="d-flex align-items-center">
                                    <strong className="mr-2">Order status: </strong>
                                    <Step Paid={order.isPaid}
                                        Processed={order.isProcessed}
                                        Delivered={order.isDelivered} />
                                </h5>
                            </div>
                            <li className="list-group-item">
                                <h4>Order Summary: </h4>
                            </li>
                            <li className="list-group list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Items Price:
                                    </div>
                                    <div className="col">
                                        <strong>{order.itemsPrice} rs</strong>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Shipping Amount:
                                    </div>
                                    <div className="col">
                                        {order.shippingPrice === 0 
                                        ? '-/-' 
                                        : <strong> {order.shippingPrice} rs </strong>}
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
                                            {order.totalPrice} rs
                                        </strong>
                                    </div>
                                </div>
                            </li>
                            {!order.isPaid && (
                                <li className="list-group list-group-item">
                                   {loadingPay && <Loader />}
                                   {!sdkReady ? (<Loader />) 
                                   : (
                                        <PayPalButton
                                        currency='INR'
                                        amount={order.totalPrice}
                                        onSuccess={successPaymentHandler}
                                        />
                                    )}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}
