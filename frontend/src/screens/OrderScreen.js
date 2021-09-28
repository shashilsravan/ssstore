import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { Link } from 'react-router-dom';
import { getOrderDetails, payOrder, deliverOrder, processOrder } from '../actions/orderActions';
import Loader from '../minicomponents/Loader';
import {ORDER_PAY_RESET, ORDER_DELIVER_RESET, ORDER_PROCESSED_RESET } from '../constants/orderConstants'
import Step from '../minicomponents/Step'
import Button from 'react-bootstrap/esm/Button';
import Meta from '../minicomponents/Meta'
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios';

function showRazorPay(srcc){
    return new Promise((resolve) => {
        const rScript = document.createElement('script')
        rScript.src = srcc
        rScript.onload = () => {
            resolve(true)
        }
        rScript.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(rScript)
    })
}

export default function OrderScreen({match, history}) {
    const [message, setMessage] = useState("")
    const [info, setInfo] = useState("")
    
    const orderId = match.params.id
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderDetails = useSelector(state => state.orderDetails)
    const { loading, error, order } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const { success: successDeliver } = orderDeliver

    const orderProcessed = useSelector(state => state.orderProcessed)
    const { success: successProcessed } = orderProcessed

   
    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        if(!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
        if(successProcessed || !order || successPay || successDeliver){
            dispatch({ type: ORDER_PAY_RESET})
            dispatch({ type: ORDER_DELIVER_RESET })
            dispatch({ type: ORDER_PROCESSED_RESET })
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, orderId, order, history, userInfo, message,
        successPay, successDeliver, successProcessed])

    // TODO: Remove paymentResult
    const successPaymentHandler = () => {
        dispatch(payOrder(orderId))
    }

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }

    const makePayment = token => {
        const body = {
            token, order
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch('/api/orders/payments', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(res => {
            console.log(res)
            if( res.status === 200){
                successPaymentHandler()
            }
            else{
                setMessage("payment Failed! Try again. If not try reloading the page once if you still get the same error")
            }
        })
        .catch(err => console.log(err))
    }

    const processHandler = () => {
        dispatch(processOrder(order, info))
    }

    async function displayRazorpay(){
        const res = await showRazorPay('https://checkout.razorpay.com/v1/checkout.js')

        if (!res){
            alert('Error loading payments please make sure you are connected to internet or try refreshing again')
            return
        }

        const data = await axios.post(`https://www.chaoticstores.com/razorpay/${order.totalPrice}`, {})

        console.log("data", data.data);


        const options = {
            "key": process.env.RAZOR_KEY,
            "amount": data.data.amount.toString(), 
            "currency": data.data.currency,
            "name": `order by ${order.user.name}`,
            "order_id": data.data.id,
            "description": `ordering ${order.orderItems.length} item/s`,
            "image": "https://res.cloudinary.com/alchemy069/image/upload/v1611065433/alchemy/a_sample_1_qsj6cf.png",
            "handler": function (response){
                successPaymentHandler()
            },
            "prefill": {
                "name": `${order.user.name}`,
                "email": `${order.user.email}`,
                "contact": `${order.shippingAddress.phone}`
            },
            "notes": {
                "address": "sss"
            },
            "theme": {
                "color": "#F05151"
            }
        };

        
        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response){
                setMessage(response.error.description);
        });
        paymentObject.open();

    }

    return (
        <div className="my-5">
            <Meta title=" Order" />
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
                                {order.user.name} &nbsp; || &nbsp; 
                                {order.user.email} </p>
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
                                Paid At <Moment fromNow>{order.paidAt}</Moment> (<Moment format="hh:mm:ss - DD/MM/YYYY">{ order.paidAt }</Moment>)
                            </div>
                            : <div className="alert alert-danger mt-2" role="alert">
                                Not paid
                            </div>
                            }
                            {message !== "" && (<div className="alert alert-danger mt-2" role="alert">
                                {message}
                            </div>)}

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
                                        order={order}
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
                                        : <strong> ₹{order.shippingPrice}</strong>}
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
                                   {!order.isPaid && (
                                        <>
                                        <a 
                                        onClick={displayRazorpay} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-ssstore btn-block mt-2">
                                            Pay Now
                                        </a>
                                        </>)
                                    }
                                </li>
                            )}
                            {userInfo && userInfo.isAdmin && order.isPaid && !order.isProcessed && (
                                <li className="list-group list-group-item">
                                    <label htmlFor="exampleInputName">Enter any message here:</label>
                                    <input type="text" className="form-control mb-2" 
                                    placeholder="Your tracking ID is: xxxxxx" value={info}
                                    id="exampleInputMessage"
                                    onChange={(e) => setInfo(e.target.value)} />
                                    <Button variant='warning' type='button' className="btn btn-block"
                                    onClick={processHandler}>
                                        Mark as Processed
                                    </Button>
                                </li>
                            )}
                            {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                <li className="list-group list-group-item">
                                    <Button type='button' variant="success" className="btn btn-block"
                                    onClick={deliverHandler}>
                                        Mark as Delivered
                                    </Button>
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
