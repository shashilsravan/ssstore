import React from 'react'
import {Link} from 'react-router-dom'
import Badge from '../minicomponents/Badge'
import Rating from '../minicomponents/Rating'
import './Product.css'

export default function Product({ product }) {
    return (
        <div className="custom-product">
            <div className="card my-3 p-2 rounded">
                <Link to={`/product/${product._id}`}>
                    <div className="zoom-effect-container zoom-effect-container2">
                        <div className="image-card">
                            <img
                            src={product.image} 
                            alt={product.name}
                            className="card-img-top"/>
                        </div>
                    </div>
                </Link>

                <div className="card-body mt-2">
                    <Link to={`/product/${product._id}`} className="product-name">
                        <div className="card-title custom-card-title">
                            <div className="fst-italic">{product.name}</div>
                        </div>
                    </Link>
                    
                    
                    <div className="card-text">
                        <div className="my-2">
                            <Rating value={product.rating} text={`${product.numReviews}`} />
                        </div>
                    </div>

                    {product.brand === 'None' ? (
                        <div className="mb-2"> 
                            <Badge upper variant="danger" text={product.category} />
                        </div>
                    )
                    : (<div className="mb-2"> 
                        <Badge upper variant="primary" text={product.brand} />
                    </div>)}

                    <span className="card-text d-flex align-items-center flex-wrap">
                        <strong>₹{product.price} </strong>
                        <span className="actualPrice">₹{product.actualPrice}</span>
                        
                        <span className="discount">
                            <div className="">
                                <Badge text={`${(100 - (product.price / product.actualPrice)*100).toFixed(0)}% OFF`}
                                upper variant="danger"
                                />
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
