import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import ProductSlider from '../minicomponents/ProductSlider'
import Rating from '../minicomponents/Rating'
import './ProductScreen.css'
import {listProductDetail} from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'


export default function ProductScreen({ history, match }) {
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("S")
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails
    useEffect(() => {
        dispatch(listProductDetail(match.params.id))
    }, [dispatch, match])
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${quantity}&size=${size}`)
    }
    const addToLikeHandler = () => {
        history.push(`/liked/${match.params.id}`)
    }
    return (
        <div className="productScreen">
            <Link to="/" className="btn btn-light float-right">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <br />
            {loading 
            ? <Loader />
            : error 
            ? <AlertError error={error} />
            : <div className="my-4">
                <div className="row">
                    <div className="col-md-5">
                        {/* <img className="img-fluid" src={product.image} alt={product.name}/> */}
                        <ProductSlider 
                            firstImage={product.image}
                            secondImage={product.imageTwo}
                            thirdImage={product.imageThree}
                            fourthImage={product.imageFour}/>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group list-group-flush middle-list">
                            <li className="list-group-item name-item">
                                <h5>{product.name}</h5>
                            </li>
                            <li className="list-group-item">
                                <strong>Category: </strong> {product.brand}
                            </li>
                            <li className="list-group-item">
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </li>
                            <li className="list-group-item">
                                <h5 style={{margin:0}}>
                                    <strong>Price:</strong> ₹{product.price} 
                                    <span className="actualPrice">₹{product.actualPrice}</span>
                                    <span className="discount">({(100 - (product.price / product.actualPrice)*100).toFixed(0)}% OFF)</span>
                                </h5>
                            </li>
                            <li className="list-group-item">
                                <strong>Description:</strong>
                                <br />
                                {product.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col text-center">
                                            <strong>Status:</strong>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col text-center">
                                            <strong style={{color:product.countInStock > 0? "green" : "red"}}>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                        </div>
                                    </div>
                                </li>
                                {product.countInStock > 0 && <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-2">
                                            Qty:
                                        </div>
                                        <div className="" style={{width: '100%'}}>
                                            <select style={{outlineWidth: 0}} className="form-select bg-light" aria-label="Default select example"
                                                onChange={(e) => {
                                                    setQuantity(e.target.value)
                                                }}>
                                                {[...Array(product.countInStock).keys()].map(x => {
                                                    return (<option key={x+1} value={x+1}>{x+1}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </li>}

                                {product.countInStock > 0 && <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-2">
                                            Size:
                                        </div>
                                        <div className="" style={{width: '100%'}}>
                                            <select 
                                            disabled={!product.isDress}
                                            style={{outlineWidth: 0}} className="form-select bg-light" aria-label="Default select example"
                                                onChange={(e) => {
                                                    setSize(e.target.value)
                                                }}>
                                                <option key="S" value="S">S</option>
                                                <option key="M" value="M">M</option>
                                                <option key="L" value="L">L</option>
                                                <option key="XL" value="XL">XL</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>}

                                <li className="list-group-item">
                                    <button 
                                    onClick={addToCartHandler}
                                    className="btn btn-success btn-block" disabled={product.countInStock === 0}>
                                        Add to Cart <i className="fas fa-shopping-cart mx-1" style={{fontSize:16}}></i>
                                    </button>
                                </li>

                                <li className="list-group-item">
                                    <button 
                                    onClick={addToLikeHandler}
                                    className="btn btn-dark btn-block">
                                        Like <i className="mx-1" style={{fontSize:16}}></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    )
}
