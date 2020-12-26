import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import ProductsLoaded from './ProductsLoaded';
import AlertError from '../minicomponents/AlertError'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import { productsFromBrand } from '../actions/productAction'

export default function CategoryAndBrandSreen({ match, history }) {
    const category = match.params.category
    const brand = match.params.brand

    const dispatch = useDispatch()
    
    const productByBrand = useSelector(state => state.productByBrand)
    const { loading, error, products} = productByBrand

    useEffect(() => {
        if (category === 'tshirts' || category === 'hoodies' || category === 'posters'){
            dispatch(productsFromBrand(category, brand))
        }
        else{
            history.push('/')
        }
    }, [category, history, brand, dispatch])

    return (
        <div className="my-5">
            <HeroTitle text={`${brand} brand in ${category}`} />
            <Link to={`/${category}`} className="float-right">
                <button className="btn btn-dark">
                    Go Back
                </button>
            </Link>
            <br /> <br />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError error={error} />
                : <ProductsLoaded 
                    isDress={(category === 'tshirts' || category === 'hoodies') ? true : false } 
                    data={products} />
            }
        </div>
    )
}
