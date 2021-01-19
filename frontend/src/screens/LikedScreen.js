import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToLike, removeFromLike} from '../actions/cartActions'
import HeroTitle from '../minicomponents/HeroTitle'
import NoItems from '../minicomponents/NoItems'
import Meta from '../minicomponents/Meta'


export default function LikedScreen({match, location, history}) {
    const productId = match.params.id
    const dispatch = useDispatch()
    const like = useSelector(state => state.like)
    const { likeItems } = like

    const removeHandler = (id) => {
        dispatch(removeFromLike(id))
    }
    useEffect(() => {
        
        if (productId){
            dispatch(addToLike(productId))
        }
    }, [dispatch, productId])
    
    return (
        <div className="my-5">
            <Meta title="Chaotic | My Likes" />
            <HeroTitle text="Liked Products" />
            <br />
            {likeItems.length === 0
            ? <NoItems text='You have not liked any product yet' />
            : likeItems.map(item => (
                <div key={item.product} className="row my-1 py-2 border">
                    {/* item.name, item.image, item.price, 
                    item.actualPrice, item.countInStock */}
                    <div className="col-md-2">
                        <Link to={`/product/${item.product}`}>
                            <img className="img-fluid rounded" src={item.image} alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-10">
                        <Link to={`/product/${item.product}`} style={{color: 'black', textDecoration: 'none'}}>
                            <h5 
                            className="my-2"
                            style={{textTransform: 'capitalize'}}>{item.name}</h5>
                        </Link>
                        <strong>
                            Price:
                        </strong> {item.price}rs
                        <br />
                        <button 
                        onClick={() => removeHandler(item.product)}
                        className="mt-2 btn btn-danger">
                            <i className="fas fa-trash"></i> Remove From Likes
                        </button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
