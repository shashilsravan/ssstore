import React from 'react'
import {Link} from 'react-router-dom'
import Badge from '../minicomponents/Badge'
import Rating from '../minicomponents/Rating'
import './Product.css'

export default function Product({ product }) {
    return (
        <div className="custom-product">
            <div className="card my-3 p-0 rounded">
                <Link to={`/product/${product._id}`}>
                    <div className="zoom-effect-container zoom-effect-container2">
                        <div className="image-card">
                            <img src={product.image} alt={product.name} 
                                className="card-img-top"/>
                            {product.inDeal && <div className='deal-badge'>
                                On Deal
                            </div>}
                        </div>
                    </div>
                </Link>

                <div className="card-body mt-2 pt-0 px-3 pb-3">
                    <Link to={`/product/${product._id}`} className="product-name">
                        <div className="card-title custom-card-title">
                            <div className="fst-italic">{product.name.length > 26
                                ? `${product.name.substring(0, 22)}...` : product.name}</div>
                        </div>
                    </Link>
                    
                    
                    <div className="card-text">
                        <div className="my-2">
                            <p className='text-muted font-small'>
                                {product.description.length > 70 
                                    ? `${product.description.substring(0, 66)}...`
                                    : product.description }
                            </p>
                            <Rating value={product.rating} text={`${product.numReviews}`} />
                        </div>
                    </div>

                    <span className="card-text d-flex align-items-center flex-wrap">
                        <strong style={{fontSize: '18px'}}>₹{product.price} </strong>
                        <span className="actualPrice">₹{product.actualPrice}</span>
                        
                        <span className="discount">
                            <div className="">
                                <Badge text={`${(100 - (product.price / product.actualPrice)*100).toFixed(0)}% OFF`}
                                upper variant="danger" className='bg-my-primary'
                                />
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
