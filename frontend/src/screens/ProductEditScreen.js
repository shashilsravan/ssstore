import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import Loader from "../minicomponents/Loader"
import FormContainer from "./FormContainer";
import {Link} from "react-router-dom"
import {logout, checkUser} from "../actions/userActions"
import { confirmAlert } from "react-confirm-alert"; 
import { listProductDetail, updateProduct } from "../actions/productAction"
import "react-confirm-alert/src/react-confirm-alert.css"; 
import { PRODUCT_UPDATE_RESET, PRODUCT_DETAILS_RESET } from "../constants/productConstants";

export default function ProductEditScreen({match, history}) {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const userCheck = useSelector(state => state.userCheck)
    const {loading: loadingCheck, success: successCheck} = userCheck

    const productUpdate = useSelector((state) => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

    const productId = match.params.id

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [actualPrice, setActualPrice] = useState(0)
    const [image, setImage] = useState("")
    const [imageTwo, setImageTwo] = useState("")
    const [imageThree, setImageThree] = useState("")
    const [imageFour, setImageFour] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [isDress, setIsDress] = useState(true)
    const [dressType, setDressType] = useState("")
    const [countInStock, setCountInStock] = useState(10)
    const [inDeal, setInDeal] = useState(false)

    useEffect(() => {
        if (!userInfo){
            history.push("/login")
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        if (successUpdate){
            dispatch({
                type: PRODUCT_UPDATE_RESET
            })
            dispatch({type: PRODUCT_DETAILS_RESET})
            history.push("/AdMIn/productList")
        }
        else{
            if (!product.name || product._id !== productId ){
                dispatch(listProductDetail(productId))
            }
            else{
                setName(product.name)
                setDescription(product.description)
                setPrice(product.price)
                setActualPrice(product.actualPrice)
                setImage(product.image)
                setImageTwo(product.imageTwo)
                setImageThree(product.imageThree)
                setImageFour(product.imageFour)
                setCategory(product.category)
                setBrand(product.brand)
                setIsDress(product.isDress)
                setDressType(product.dressType)
                setCountInStock(product.countInStock)
                setInDeal(product.inDeal)
            }
        }
        dispatch(checkUser())
    }, [dispatch, userInfo, history, product, productId, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        confirmAlert({
                title: `Updating Product`,
                message: `Updating Product`,
                buttons: [
                    {
                        label: "Yes! Update",
                        onClick: () => dispatch(updateProduct({
                            _id: productId,
                            name, price, description, actualPrice, 
                            image, imageTwo, imageThree, imageFour, 
                            category, brand, isDress, dressType, countInStock, inDeal
                        }))
                    },
                    {
                        label: "No, Don't Update",
                        onClick: () => console.log()
                    }
                ]
            })
    }

    return (
        <div className="my-5">
            <Link to="/AdMIn/productList">
                <button className="btn btn-dark float-right">
                    Go Back <i className="fas fa-backward"></i>
                </button>
            </Link>
            <br /><br />
            <FormContainer>
                <h4>Edit Product</h4>
                {loadingUpdate && <Loader />}
                {errorUpdate && <div className="alert alert-danger mt-3" role="alert">
                        {errorUpdate}
                    </div> }
                {error && <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div> }
                {loading 
                ? <Loader />
                : successCheck && (
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Product Name:</label>
                            <input type="text" className="form-control" 
                            placeholder={name} value={name}
                            id="exampleInputName"
                            onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Product Description: </label>
                            <textarea 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} required
                            className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Product Price:</label>
                            <input type="number" className="form-control" 
                            placeholder={price} value={price}
                            id="price"
                            onChange={(e) => setPrice(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="actualPrice">Product Actual Price:</label>
                            <input type="number" className="form-control" 
                            placeholder={actualPrice} value={actualPrice}
                            id="actualPrice"
                            onChange={(e) => setActualPrice(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image1">Product Image - 1:</label>
                            <input type="text" className="form-control" 
                            placeholder={image} value={image}
                            id="image1"
                            onChange={(e) => setImage(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image2">Product Image - 2:</label>
                            <input type="text" className="form-control" 
                            placeholder={imageTwo} value={imageTwo}
                            id="image2"
                            onChange={(e) => setImageTwo(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image3">Product Image - 3:</label>
                            <input type="text" className="form-control" 
                            placeholder={imageThree} value={imageThree}
                            id="image3"
                            onChange={(e) => setImageThree(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image4">Product Image - 4:</label>
                            <input type="text" className="form-control" 
                            placeholder={imageFour} value={imageFour}
                            id="image4"
                            onChange={(e) => setImageFour(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <select 
                            onChange={(e) => setCategory(e.target.value)}
                            className="form-select" aria-label="Default select example">
                                <option>Select Category:</option>
                                <option 
                                    selected={category === "tshirts"}
                                    value="tshirts" className="text-capitalize">
                                        tshirts
                                </option>
                                <option 
                                    selected={category === "hoodies"}
                                    value="hoodies" className="text-capitalize">
                                        hoodies
                                </option>
                                <option 
                                    selected={category === "posters"}
                                    value="posters" className="text-capitalize">
                                        posters
                                </option>
                                <option 
                                    selected={category === "stickers"}
                                    value="stickers" className="text-capitalize">
                                        stickers
                                </option>
                                <option 
                                    selected={category === "mask"}
                                    value="mask" className="text-capitalize">
                                        mask
                                </option>
                                <option 
                                    selected={category === "tote"}
                                    value="tote" className="text-capitalize">
                                        Tote Bags
                                </option>
                                <option 
                                    selected={category === "notebooks"}
                                    value="notebooks" className="text-capitalize">
                                        notebooks
                                </option>
                            </select>
                        </div>
                        <div className="form-group">
                            {category === "tshirts" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ""}
                                    aria-label="Default select example">
                                        <option>Brand in Tshirts:</option>
                                        <option 
                                            selected={brand === "plaintees"}
                                            value="plaintees" className="text-capitalize">
                                                Plain Tees
                                        </option>
                                        <option 
                                            selected={brand === "animie"}
                                            value="animie" className="text-capitalize">
                                                Animie
                                        </option>
                                        <option 
                                            selected={brand === "webseries"}
                                            value="webseries" className="text-capitalize">
                                                Web Series
                                        </option>
                                        <option 
                                            selected={brand === "movies"}
                                            value="movies" className="text-capitalize">
                                                movies
                                        </option>
                                        <option 
                                            selected={brand === "wwe"}
                                            value="wwe" className="text-capitalize">
                                                wwe
                                        </option>
                                        <option 
                                            selected={brand === "graffiti"}
                                            value="graffiti" className="text-capitalize">
                                                graffiti
                                        </option>
                                        <option 
                                            selected={brand === "cartoons"}
                                            value="cartoons" className="text-capitalize">
                                                cartoons
                                        </option>
                                        <option 
                                            selected={brand === "memes"}
                                            value="memes" className="text-capitalize">
                                                memes
                                        </option>
                                        <option 
                                            selected={brand === "quotes"}
                                            value="quotes" className="text-capitalize">
                                                quotes
                                        </option>
                                        <option 
                                            selected={brand === "sports"}
                                            value="sports" className="text-capitalize">
                                                sports
                                        </option>
                                        <option 
                                            selected={brand === "music"}
                                            value="music" className="text-capitalize">
                                                music
                                        </option>
                                        <option 
                                            selected={brand === "hiphop"}
                                            value="hiphop" className="text-capitalize">
                                                hiphop
                                        </option>
                                        <option 
                                            selected={brand === "spiritual"}
                                            value="spiritual" className="text-capitalize">
                                                spiritual
                                        </option>
                                        <option 
                                            selected={brand === "games"}
                                            value="games" className="text-capitalize">
                                                games
                                        </option>
                                        <option 
                                            selected={brand === "collection"}
                                            value="collection" className="text-capitalize">
                                                collection
                                        </option>
                                        <option 
                                            selected={brand === "literature"}
                                            value="literature" className="text-capitalize">
                                                literature
                                        </option>
                                        <option 
                                            selected={brand === "photography"}
                                            value="photography" className="text-capitalize">
                                                photography
                                        </option>
                                        <option 
                                            selected={brand === "superheroes"}
                                            value="superheroes" className="text-capitalize">
                                                super heroes
                                        </option>
                                        <option 
                                            selected={brand === "regional"}
                                            value="regional" className="text-capitalize">
                                                regional
                                        </option>
                                        <option 
                                            selected={brand === "wanderers"}
                                            value="wanderers" className="text-capitalize">
                                                wanderers
                                        </option>
                                        <option 
                                            selected={brand === "hightees"}
                                            value="hightees" className="text-capitalize">
                                                high tees
                                        </option>
                                        <option 
                                            selected={brand === "combo"}
                                            value="combo" className="text-capitalize">
                                                combo
                                        </option>
                                    </select>
                                )}

                            {category === "hoodies" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Hoodies:</option>
                                        <option 
                                            selected={brand === 'plainhoodies'}
                                            value="plainhoodies" className="text-capitalize">
                                                Plain Hoodies
                                        </option>
                                        <option 
                                            selected={brand === 'animie'}
                                            value="animie" className="text-capitalize">
                                                Animie
                                        </option>
                                        <option 
                                            selected={brand === 'webseries'}
                                            value="webseries" className="text-capitalize">
                                                Web Series
                                        </option>
                                        <option 
                                            selected={brand === 'cartoons'}
                                            value="cartoons" className="text-capitalize">
                                                cartoons
                                        </option>
                                        <option 
                                            selected={brand === 'memesandquotes'}
                                            value="memesandquotes" className="text-capitalize">
                                                memes and quotes
                                        </option>
                                        <option 
                                            selected={brand === 'music'}
                                            value="music" className="text-capitalize">
                                                music
                                        </option>
                                        <option 
                                            selected={brand === 'games'}
                                            value="games" className="text-capitalize">
                                                games
                                        </option>
                                        <option 
                                            selected={brand === 'collection'}
                                            value="collection" className="text-capitalize">
                                                collection
                                        </option>
                                    </select>
                                )}

                            {category === "posters" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Posters:</option>
                                        <option 
                                            selected={brand === 'animie'}
                                            value="animie" className="text-capitalize">
                                                Animie
                                        </option>
                                        <option 
                                            selected={brand === 'webseries'}
                                            value="webseries" className="text-capitalize">
                                                Web Series
                                        </option>
                                        <option 
                                            selected={brand === 'movies'}
                                            value="movies" className="text-capitalize">
                                                movies
                                        </option>
                                        <option 
                                            selected={brand === 'wwe'}
                                            value="wwe" className="text-capitalize">
                                                wwe
                                        </option>
                                        <option 
                                            selected={brand === 'graffiti'}
                                            value="graffiti" className="text-capitalize">
                                                graffiti
                                        </option>
                                        <option 
                                            selected={brand === 'cartoons'}
                                            value="cartoons" className="text-capitalize">
                                                cartoons
                                        </option>
                                        <option 
                                            selected={brand === 'memes'}
                                            value="memes" className="text-capitalize">
                                                memes
                                        </option>
                                        <option 
                                            selected={brand === 'quotes'}
                                            value="quotes" className="text-capitalize">
                                                quotes
                                        </option>
                                        <option 
                                            selected={brand === 'sports'}
                                            value="sports" className="text-capitalize">
                                                sports
                                        </option>
                                        <option 
                                            selected={brand === 'music'}
                                            value="music" className="text-capitalize">
                                                music
                                        </option>
                                        <option 
                                            selected={brand === 'hiphop'}
                                            value="hiphop" className="text-capitalize">
                                                hiphop
                                        </option>
                                        <option 
                                            selected={brand === 'spiritual'}
                                            value="spiritual" className="text-capitalize">
                                                spiritual
                                        </option>
                                        <option 
                                            selected={brand === 'games'}
                                            value="games" className="text-capitalize">
                                                games
                                        </option>
                                        <option 
                                            selected={brand === 'literature'}
                                            value="literature" className="text-capitalize">
                                                literature
                                        </option>
                                        <option 
                                            selected={brand === 'photography'}
                                            value="photography" className="text-capitalize">
                                                photography
                                        </option>
                                        <option 
                                            selected={brand === 'superheroes'}
                                            value="superheroes" className="text-capitalize">
                                                super heroes
                                        </option>
                                        <option 
                                            selected={brand === 'regional'}
                                            value="regional" className="text-capitalize">
                                                regional
                                        </option>
                                        <option 
                                            selected={brand === 'wanderers'}
                                            value="wanderers" className="text-capitalize">
                                                wanderers
                                        </option>
                                        <option 
                                            selected={brand === 'motivational'}
                                            value="motivational" className="text-capitalize">
                                                motivational
                                        </option>
                                    </select>
                                )}

                            {category === "stickers" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Stickers:</option>
                                        <option 
                                            selected={brand === "laptopskins"}
                                            value="laptopskins" className="text-capitalize">
                                                Laptop skins
                                        </option>
                                    </select>
                                )}

                            {category === "mask" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Masks:</option>
                                        <option 
                                            selected={brand === "plain"}
                                            value="plain" className="text-capitalize">
                                                plain masks
                                        </option>
                                        <option 
                                            selected={brand === "printed"}
                                            value="printed" className="text-capitalize">
                                                printed masks
                                        </option>
                                    </select>
                                )}

                            {category === "tote" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Tote bags:</option>
                                        <option 
                                            selected={brand === "none"}
                                            value="none" className="text-capitalize">
                                                none 
                                        </option>
                                    </select>
                                )}

                            {category === "notebooks" && (
                                <select 
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-select" disabled={category === ''}
                                    aria-label="Default select example">
                                        <option>Brand in Notebooks:</option>
                                        <option 
                                            selected={brand === "none"}
                                            value="none" className="text-capitalize">
                                                none 
                                        </option>
                                    </select>
                                )}
                            
                        </div>
                        <div className="form-group ml-4">
                            <input className="form-check-input" 
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={isDress}
                            onChange={(e) => setIsDress(e.target.checked)}/>
                            <label 
                            className="form-check-label" htmlFor="flexCheckDefault">
                                Is Dress?
                            </label>
                        </div>
                        <div className="form-group">
                            <select 
                                    onChange={(e) => setDressType(e.target.value)}
                                    className="form-select" disabled={isDress === false}
                                    aria-label="Default select example">
                                        <option>Select Age group:</option>
                                        <option 
                                            selected={dressType === "Men"}
                                            value="Men" className="text-capitalize">
                                                men
                                        </option>
                                        <option 
                                            selected={dressType === "Women"}
                                            value="Women" className="text-capitalize">
                                                women
                                        </option>

                                        <option 
                                            selected={dressType === "Boys"}
                                            value="Boys" className="text-capitalize">
                                                boys
                                        </option>
                                        <option 
                                            selected={dressType === "Girls"}
                                            value="Girls" className="text-capitalize">
                                                girls
                                        </option>
                                    </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="countInStock">Product Stock:</label>
                            <input type="number" className="form-control" 
                            placeholder={countInStock} value={countInStock}
                            id="countInStock"
                            onChange={(e) => setCountInStock(e.target.value)} required/>
                        </div>
                        <div className="form-group ml-4">
                            <input className="form-check-input" 
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={inDeal}
                            onChange={(e) => setInDeal(e.target.checked)}/>
                            <label 
                            className="form-check-label" htmlFor="flexCheckDefault">
                                Is Deal?
                            </label>
                        </div>
                        <button type="submit" className="btn btn-chaotic">
                            Update
                        </button>
                    </form>
                )}
            </FormContainer>
        </div>
    )
}
