import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions'

export default function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
    useEffect(() => {
        const sidebarToggle = document.querySelector('.header-mobile__toggle-sidebar')
        const sidebar = document.querySelector('.header-mobile__sidebar')
        const closeToggle = document.querySelector('.closeSidebar')
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.remove('hide')
        })
        closeToggle.addEventListener("click", () => {
            sidebar.classList.add('hide')
        })
    })
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <div className="header-desktop">
                <div className="container-xl">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" target="_self" to='/'>
                                <img className="logo" src="https://res.cloudinary.com/alchemy069/image/upload/v1605966215/alchemy/mainlogo_ocs3sl.png" alt=""/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" target="_self" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" target="_self" to="/about">About us</Link>
                                </li>
                                <li className="nav-item active dropdown">
                                    <a className="nav-link dropdown-toggle" target="_self" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown1
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" target="_self" to='/'>Sample - 1</Link></li>
                                        <li><Link className="dropdown-item" target="_self" to='/'>Sample - 2</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" target="_self" to='/'>Sample - 3</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" target="_self" to="/liked">
                                        <i className="far fa-heart" style={{fontSize:26}}></i>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link active" target="_self" to="/cart">
                                        <i className="fa fa-shopping-cart"></i>
                                    </Link>
                                </li>

                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    {userInfo ? 
                                    <ul
                                    style={{padding:0, listStyle: "none"}}>
                                        <li className="nav-item active dropdown">
                                            <a className="nav-link dropdown-toggle" 
                                            style={{fontSize: 18}}
                                            target="_self" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                                {userInfo.name}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className="dropdown-item" target="_self" to='/profile'>
                                                        <i className="fas fa-user-edit"></i> Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <p className="dropdown-item" target="_self"
                                                    onClick={logoutHandler}>
                                                        <i className="fas fa-sign-out-alt"></i> Logout
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    : <Link className="nav-link active" to="/login" target="_self">
                                        <i className="fas fa-user-circle"></i>
                                    </Link>}
                                </li>

                                
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="header-mobile">
                <div className="container-xl">
                    <div className="header-mobile__toggle-sidebar">
                        <button><i className="fa fa-bars"></i></button>
                    </div>
                    
                    <div className="header-mobile__icons-container ml-auto mr-1 d-flex justify-content-center align-items-center">
                        <Link target="_self" to="/cart">
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                        {userInfo ? 
                            <div className="d-flex align-items-center">
                                <Link 
                                style={{color:"white", textDecoration:"none"}}
                                to='/profile'>
                                    <h5 className="ml-2 mt-2">
                                        <i className="fas fa-user-edit"></i>
                                    </h5>
                                </Link>
                                <h5 onClick={logoutHandler}
                                className="ml-2 mt-2"
                                style={{color:"white", fontSize:24 ,textDecoration:"none"}}>
                                    <i className="fas fa-sign-out-alt"></i>
                                </h5>
                            </div>
                            : <Link 
                            style={{padding:"0.5rem"}}
                            className="nav-link active" to="/login" target="_self">
                                <i className="fas fa-user-circle"></i>
                            </Link>
                        }
                        
                    </div>
                    <div className="header-mobile__sidebar hide">
                        <i className="fa fa-times float-right closeSidebar" style={{color:"#000", cursor: "pointer", fontSize: 20}}></i>
                        <br />
                        <img className="logoImage" src="https://res.cloudinary.com/alchemy069/image/upload/v1605966215/alchemy/mainlogo_ocs3sl.png" alt=""/>
                        <Link target="_self" to="/">
                            Home
                        </Link>
                        <br />
                        <Link target="_self" to="/about">
                            About us
                        </Link>
                        <br />
                        <Link to="/liked" target="_self">
                            Liked Products
                        </Link>
                        <br />
                        <p>
                            <a data-toggle="collapse" target="_self" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Categories <i className="fa fa-chevron-down"></i>
                            </a>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body font-black">
                                <div className="d-flex flex-column">
                                    <Link target="_self" to="#">Sub category</Link>
                                    <Link target="_self" to="#">Sub category</Link>
                                    <Link target="_self" to="#">Sub category</Link>
                                    <Link target="_self" to="#">Sub category</Link>
                                    <Link target="_self" to="#">Sub category</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="mt-1 mx-auto mysearchbar d-flex" style={{width:'90%'}}>
                        <input className="form-control mr-2" type="search" placeholder="Hunt for your Product ..." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
            </div>
        </header>
    )
}
