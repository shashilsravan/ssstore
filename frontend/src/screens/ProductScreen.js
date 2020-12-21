import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import ProductSlider from '../minicomponents/ProductSlider'
import Rating from '../minicomponents/Rating'
import './ProductScreen.css'
import {listProductDetail} from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import Badge from '../minicomponents/Badge'
import SizeChart from '../minicomponents/SizeChart'


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
        <div className="productScreen my-5">
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
                    <div className="col-lg-5">
                        {/* <img className="img-fluid" src={product.image} alt={product.name}/> */}
                        <ProductSlider 
                            firstImage={product.image}
                            secondImage={product.imageTwo}
                            thirdImage={product.imageThree}
                            fourthImage={product.imageFour}/>
                    </div>
                    <div className="col-lg-4">
                        <ul className="list-group list-group-flush middle-list">
                            <li className="list-group-item name-item">
                                <div className="row">
                                    <div className="col-9">
                                        <h5>{product.name}</h5>
                                    </div>
                                    <div className="col-3">
                                        <span 
                                            onClick={addToLikeHandler}
                                            className="">
                                                <i className="far fa-heart liked-heart bs-small"></i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item d-flex">
                                <Badge upper variant="danger" text={product.category} />
                                <div className="mx-1">-</div>
                                <Badge upper variant="primary" text={product.brand} />
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
                                {product.isDress ? <SizeChart /> : null}
                            </li>
                            <li className="list-group-item">
                                <strong>Description:</strong>
                                <br />
                                {product.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
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
                                            <strong style={{color:product.countInStock > 0 ? "green" : "red"}}>{product.countInStock > 0 ? 'In Stock' 
                                            :(
                                                <span>Out of Stock <i className="far fa-frown"></i></span>
                                            )}</strong>
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
                                                    // console.log(size)
                                                }}>
                                                <option key="S" value="S">S</option>
                                                <option key="M" value="M">M</option>
                                                <option key="L" value="L">L</option>
                                                <option key="XL" value="XL">XL</option>
                                                <option key="XXL" value="XXL">XXL</option>
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

                            </ul>
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    )
}
