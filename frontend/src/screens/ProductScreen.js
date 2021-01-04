import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import ProductSlider from '../minicomponents/ProductSlider'
import Rating from '../minicomponents/Rating'
import './ProductScreen.css'
import {listProductDetail, createProductReview} from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import Badge from '../minicomponents/Badge'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import SizeChart from '../minicomponents/SizeChart'
import Alert from 'react-bootstrap/Alert'
import Moment from 'react-moment';
import 'moment-timezone';
import CustomTag from '../minicomponents/CustomTag'
import Meta from '../minicomponents/Meta'


export default function ProductScreen({ history, match }) {
    const [quantity, setQuantity] = useState(1)

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const [size, setSize] = useState("S")
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { error: errorReview, success: successReview } = productReviewCreate

    useEffect(() => {
        if (successReview){
            setRating(0)
            setComment('')
            dispatch(listProductDetail(match.params.id))
        }
        if (!product._id || product._id !== match.params.id) {
            dispatch(listProductDetail(match.params.id))
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
    }, [dispatch, match, successReview, errorReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${quantity}&size=${size}`)
    }
    const addToLikeHandler = () => {
        history.push(`/liked/${match.params.id}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(match.params.id, { rating, comment}))
    }

    return (
        <>
        <div className="productScreen mt-4 mb-5">
            <Link to="/" className="btn btn-light float-right">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <br />
            {loading 
            ? <Loader />
            : error 
            ? <AlertError error={error} />
            : (<> 
            <Meta title={product.name} />
            <div className="my-4">
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
                            {product.inDeal && <li className="list-group-item d-flex">
                                <CustomTag text="In Deal" />
                            </li>}
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
                                {product.countInStock < 5 && <p className="text-danger fw-bold mt-2">Hurry!!! Only few left.</p>}
                                {product.isDress ? <SizeChart dressType={product.dressType} /> : null}
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
                                                {[...Array(product.countInStock > 3 ? 3 : product.countInStock).keys()].map(x => {
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
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h4>Reviews: </h4>
                        {
                            product.reviews.length === 0 ? (<Alert variant="primary">
                                None reviewed this product
                            </Alert>)
                            : (
                                <ul className="list-group list-group-flush mt-2 bs-small">
                                    {product.reviews.map(review => (
                                        <li key={review._id} 
                                        className="list-group-item list-group-review">
                                            <div className="d-flex">
                                                <strong>{review.name}</strong> 
                                                <p className="mx-2">
                                                    <Moment fromNow>{review.createdAt}</Moment> 
                                                    {/* (<Moment format="hh:mm:ss - DD/MM/YYYY">{ review.createdAt }</Moment>) */}
                                                </p>
                                                
                                            </div>
                                            <Rating value={review.rating} text="" className='go-above' />
                                            <p className="mt-2">
                                                <i className="fas fa-user-edit mr-2"></i>
                                                {review.comment}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                        <ul className="list-group list-group-flush mt-2">
                            {userInfo && <li className="list-group-item list-group-review">
                                {errorReview && <Alert className="my-2" variant="danger">{errorReview}</Alert>}
                                
                                <h4>Write a review: </h4>
                                
                                <form onSubmit={(e) => submitHandler(e)}>
                                    <div className="my-2">
                                        <div className="form-group">
                                            <select 
                                            onChange={(e) => setRating(e.target.value)}
                                            className="form-select"
                                            aria-label="Default select example">
                                                <option disabled>Select Rating:</option>
                                                <option value="1">
                                                        1 - Poor
                                                </option>
                                                <option value="2">
                                                        2 - Fair
                                                </option>
                                                <option value="3">
                                                        3 - Good
                                                </option>
                                                <option value="4">
                                                        4 - Very Good
                                                </option>
                                                <option value="5">
                                                        5 - Best
                                                </option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            <strong>Review product: </strong>
                                        </label>
                                        <textarea rows="3" value={comment}
                                        onChange={(e) => setComment(e.target.value)} required
                                        className="form-control" id="exampleFormControlInput1" placeholder="write your review here..."></textarea>
                                    </div>
                                    <button 
                                    className="btn btn-block btn-outline-primary"
                                    type="submit">
                                        Submit Review
                                    </button>
                                </form>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div> </>) }
        </div>
        
        </>
    )
}
