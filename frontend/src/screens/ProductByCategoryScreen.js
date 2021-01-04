import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductsLoaded from './ProductsLoaded';
import AlertError from '../minicomponents/AlertError'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import Meta from '../minicomponents/Meta'
import { productsFromCategory } from '../actions/productAction'

export default function ProductByCategoryScreen({ match, history }) {
    const category = match.params.category
    const dispatch = useDispatch()
    const productByCategory = useSelector(state => state.productByCategory)
    const { loading, error, products} = productByCategory

    useEffect(() => {
        dispatch(productsFromCategory(category))
    }, [category, history])

    return (
        <div className="my-5">
            <HeroTitle text={`Products in ${category}`} />
            <Meta title={`Chaotic | ${category}`} />
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
