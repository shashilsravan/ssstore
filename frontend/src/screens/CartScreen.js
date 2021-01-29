import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart, removeFromCart} from '../actions/cartActions'
import HeroTitle from '../minicomponents/HeroTitle'
import Badge from '../minicomponents/Badge'
import NoItems from '../minicomponents/NoItems'
import Meta from '../minicomponents/Meta'


export default function CartScreen({match, location, history }) {
    const productId = match.params.id
    var numberPattern = /\d+/g;
    const size = location.search ? location.search.split('=')[2] : "M"
    const qty = location.search ? Number(location.search.match(numberPattern)) : 1
  
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    
    const {cartItems} = cart
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    useEffect(() => {
        if (productId){
            dispatch(addToCart(productId, qty, size))
        }
    }, [dispatch, productId, qty, size, cart, cartItems])
    return (
        <div className="my-5 pb-5">
            <Meta title="Chaotic | My Cart" />
            <Link to="/" className="btn btn-light float-right mt-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <br />
            <div className="row mt-4">
                <div className="col-md-8">
                    <HeroTitle text="My Cart" />
                    {
                        cartItems.length === 0 
                        ? <NoItems text="Ooops... No items in your Cart" />
                        : <ul className="list-group list-group-flush">
                            {cartItems.map(item => (
                                <li key={item.product} 
                                    className="list-group-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={item.image} alt={item.name} className="img-fluid rounded"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Link to={`/product/${item.product}`} style={{color: "black", textDecoration: "none"}}>
                                                    <h5 className="my-2">{item.name}</h5>
                                                </Link>
                                                <strong>Total Price:</strong> ₹{item.price * item.qty} 
                                                <span className="actualPrice">₹{item.actualPrice * item.qty}</span>
                                                <span className="discount mb-2">
                                                    <div className="">
                                                        <Badge text={`${(100 - ((item.price * item.qty) / (item.actualPrice * item.qty))*100).toFixed(0)}% OFF`}
                                                        upper variant="success"
                                                        />
                                                    </div>
                                                </span>
                                                <div className="mt-2 d-flex align-items-center">
                                                    <div className="mr-2">
                                                        Qty:
                                                    </div>
                                                    <div className="d-flex" style={{width: '100%'}}>
                                                        <select style={{outlineWidth: 0}} className="form-select" aria-label="Default select example"
                                                            onChange={(e) => {
                                                                dispatch(addToCart(item.product, Number(e.target.value), item.size))
                                                            }} defaultValue={item.qty}>
                                                            {[...Array(item.countInStock > 3 ? 3 : item.countInStock).keys()].map(x => {
                                                                return (<option key={x+1} value={x+1}>{x+1}</option>)
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mt-2">
                                                    <div className="mr-2">
                                                        Size:
                                                    </div>
                                                    <div className="" style={{width: '100%'}}>
                                                        <select 
                                                        disabled={!item.isDress}
                                                        style={{outlineWidth: 0}} className="form-select bg-light" aria-label="Default select example"
                                                            onChange={(e) => {
                                                                dispatch(addToCart(item.product, item.qty, e.target.value))
                                                            }}>

                                                            {item.size === "S" ? (
                                                                <option key="S" value="S" selected>S</option>
                                                            )
                                                            :(
                                                                <option key="S" value="S">S</option>
                                                            )}

                                                            {item.size === "M" ? (
                                                                <option key="M" value="M" selected>M</option>
                                                            )
                                                            :(
                                                                <option key="M" value="M">M</option>
                                                            )}

                                                            {item.size === "L" ? (
                                                                <option key="L" value="L" selected>L</option>
                                                            )
                                                            :(
                                                                <option key="L" value="L">L</option>
                                                            )}

                                                            {item.size === "XL" ? (
                                                                <option key="XL" value="XL" selected>XL</option>
                                                            )
                                                            :(
                                                                <option key="XL" value="XL">XL</option>
                                                            )}

                                                            {item.size === "XXL" ? (
                                                                <option key="XXL" value="XXL" selected>XXL</option>
                                                            )
                                                            :(
                                                                <option key="XXL" value="XXL">XXL</option>
                                                            )}
                                                            
                                                        </select>
                                                    </div>
                                            </div>
                                            <div 
                                            onClick={() => removeFromCartHandler(item.product)}
                                            className="mt-3 btn btn-danger btn-block">
                                                Remove From Cart <i className="fas fa-trash mx-2" />
                                            </div>
                                            </div>
                                        </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="col-md-4 my-4">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5>Ordering - {cartItems.reduce((acc, item) => acc + item.qty, 0)} products</h5>
                            </li>
                            <li className="list-group-item d-flex">
                                Total Price: <h5 className="ml-2"> ₹ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h5>
                            </li>
                            <li className="list-group-item">
                                <button 
                                onClick={checkOutHandler}
                                className="btn btn-block btn-success" disabled={cartItems.length === 0}>
                                    Proceed to Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
