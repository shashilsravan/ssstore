import React from 'react'
import {Link} from 'react-router-dom'
import ProductSlider from '../minicomponents/ProductSlider'
import Rating from '../minicomponents/Rating'
import products from '../Products'
import './ProductScreen.css'

export default function ProductScreen({ match }) {
    const product = products.find(p => p._id == match.params.id)
    return (
        <div className="productScreen">
            <Link to="/" className="btn btn-light float-right">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <br />
            <div className="my-4">
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
                                <li className="list-group-item">
                                    <button className="btn btn-success btn-block" disabled={product.countInStock == 0}>
                                        Add to Cart <i className="fas fa-shopping-cart mx-1" style={{fontSize:16}}></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
