import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { creatingSlide, deletingSlide, gettingSlides } from '../actions/slideActions';
import { logout, checkUser } from '../actions/userActions'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function AdminScreen({history}) {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userCheck = useSelector(state => state.userCheck)
    const {loading: loadingCheck, success: successCheck} = userCheck

    const getSlides = useSelector(state => state.getSlides)
    const { loading: loadingSlides, slides } = getSlides

    const createSlide = useSelector(state => state.createSlide)
    const { error: errorCreating, success: successCreate } = createSlide

    const deleteSlide = useSelector(state => state.deleteSlide)
    const {success: successDelete} = deleteSlide

    const [url, setUrl] = useState("")
    const [text, setText] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        dispatch(checkUser())
        dispatch(gettingSlides())
    }, [userInfo, history, dispatch, successDelete, successCreate])

    const refreshHandler = () => {
        dispatch(gettingSlides())
    }

    const deleteHandler = (id) => {
        confirmAlert({
            title: `Deleting Slide`,
            message: `Deleting a Slide with id ${id}`,
            buttons: [
                {
                    label: 'Ok! Delete',
                    onClick: () => {
                        dispatch(deletingSlide(id))
                    }
                },
                {
                    label: "No, Don't Delete",
                    onClick: () => console.log()
                }
            ]
        })
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (url !== "" && text !== ""){
            dispatch(creatingSlide({ image: url, text, link}))
        }
        refreshHandler()
    }

    return (
        <div className="my-5">
            {loadingCheck ? <Loader />
            : successCheck &&
            (<>
            <h3 className="text-warning">Hello Admin <i className="far fa-smile-beam"></i> </h3>

            <div className="mt-4">
                <h4 className="text-center">Slider Section</h4>
                <div className="buttons-container mb-4">
                    <button className="btn btn-light" onClick={refreshHandler}>
                        Refresh
                    </button>
                </div>
                {errorCreating && 
                    <AlertError error={errorCreating}/>
                }
                <div className="row mb-4">
                {loadingSlides ? <Loader /> : 
                slides &&
                    slides.map(image => (
                        <div key={image._id} className="col-6 mt-2 col-md-4">
                            <Link to={image.link}>
                                <img 
                                className="img-fluid"
                                src={image.image} alt={image.link}/>
                            </Link>
                            <button 
                            onClick={() => deleteHandler(image._id)}
                            className="mt-2 btn btn-danger btn-block btn-sm">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="input-group d-flex flex-column">
                        <input 
                        type="text" value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control my-2"
                        style={{ width: '100%'}} maxLength={54}
                        placeholder="Text in pre header" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input 
                        type="text" onChange={(e) => setUrl(e.target.value)}
                        className="form-control my-2" value={url}
                        style={{ width: '100%'}}
                        placeholder="Slide URL..." aria-label="Username" aria-describedby="addon-wrapping" />
                        <input 
                        type="text" onChange={(e) => setLink(e.target.value)}
                        className="form-control my-2" value={link}
                        style={{ width: '100%'}}
                        placeholder="Link to be displayed" aria-label="Username" aria-describedby="addon-wrapping" />
                        <button type="submit" className="btn btn-success mx-4">
                            Add <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="">
                        <p>Here is the list of all the Products in your website: </p>
                        <Link to='/AdMIn/productList' className="text-decoration-none">
                            <button className="btn btn-success mb-5">
                                View All Products
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="">
                        <p>Here is the list of all the users in your website: </p>
                        <Link to='/AdMIn/userList' className="text-decoration-none">
                            <button className="btn btn-primary mb-5">
                                View All Users
                            </button>
                        </Link>
                    </div>

                </div>
            
                <div className="col-md-4">
                    <div className="">
                        <p>Here is the list of all the orders in your website: </p>
                        <Link to='/AdMIn/orderList' className="text-decoration-none">
                            <button className="btn btn-danger mb-5">
                                View All Orders
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
                        
            </>)}
        </div>
    )
}
