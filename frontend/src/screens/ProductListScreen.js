import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import {logout} from '../actions/userActions'
import { listProducts, deleteProduct } from '../actions/productAction';
import Button from 'react-bootstrap/esm/Button';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function ProductListScreen({ history, match }) {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        else{
            dispatch(listProducts())
        }
    }, [dispatch, userInfo, history, successDelete])

    const deleteHandler = (id) => {
        confirmAlert({
            title: `Deleting product`,
            message: `Deleting product, productid-${id}`,
            buttons: [
                {
                    label: 'Yes! Delete',
                    onClick: () => dispatch(deleteProduct(id))
                },
                {
                    label: "No, Don't Delete",
                    onClick: () => console.log()
                }
            ]
        })
    }

    const createProductHandler = (product) => {
    }

    return (
        <div className="my-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/AdMIn'>Admin Panel</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        All products
                    </li>
                </ol>
            </nav>
            
            <div className="row align-items-center">
                <div className="col">
                    <h4>All Products</h4>
                </div>
                <div className="col text-right">
                    <Button className="my-3" onClick={createProductHandler}>
                        <i className="fas fa-plus mx-2"></i>    Create Product
                    </Button>
                </div>
            </div>
            {loadingDelete && <Loader />}
            {errorDelete && errorDelete}
            {loading 
                ? <Loader /> 
                : error 
                ? <AlertError error={error} />
                : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>InStock</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td className="text-capitalize">
                                        {product.name}
                                    </td>
                                    <td>{product.price}</td>
                                    <td className="text-uppercase">
                                        {product.category}
                                    </td>
                                    <td>
                                        {product.brand}
                                    </td>
                                    <td>
                                        {product.countInStock}
                                    </td>
                                    <td>
                                        {product.dressType}
                                    </td>
                                    <td>
                                        <Link to={`/AdMIn/product/${product._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </Link>
                                        <Button variant='danger' className='btn-sm' 
                                        onClick={() => deleteHandler(product._id)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
                }
        </div>
    )
}
