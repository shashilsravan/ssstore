import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../actions/userActions'
import AlertError from '../minicomponents/AlertError'
import HeroTitle from '../minicomponents/HeroTitle'
import { productsFromGroup } from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import ProductsLoaded from './ProductsLoaded';
import Meta from '../minicomponents/Meta'



export default function ShopByScreen({ match, history }) {
    const dispatch = useDispatch()
    const grouping = match.params.grouping

    const productsByGroup = useSelector(state => state.productsByGroup)
    const { loading, error, products } = productsByGroup

    useEffect(() => {
        window.scrollTo(0,0)
        if (grouping === "Men" || grouping === "Women" || grouping === "Boys" || grouping === "Girls"){
            dispatch(productsFromGroup(grouping))
        }
        else{
            dispatch(logout())
            history.push('/')
        }
    }, [grouping, history, dispatch])

    return (
        <div className="my-5">
            <Meta title={`${grouping}`} />
            <HeroTitle text={`Shop By - ${grouping}`} />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError error={error} />
                : <ProductsLoaded 
                    data={products} />
            }
        </div>
    )
}
