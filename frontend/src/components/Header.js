import React, { useEffect } from 'react'
import {Link, Route} from 'react-router-dom'
import './Header.css'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

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
        confirmAlert({
            title: `Logout`,
            message: `Are you sure to logout?`,
            buttons: [
                {
                    label: 'Yes!',
                    onClick: () => dispatch(logout())
                },
                {
                    label: "No!",
                    onClick: () => console.log()
                }
            ]
        })
    }
    return (
        <header>
            <div className="header-desktop">
                <div className="container-xl">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to='/'>
                                <img className="logo" src="https://res.cloudinary.com/alchemy069/image/upload/v1611065433/alchemy/a_sample_1_qsj6cf.png" alt=""/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About us</Link>
                                </li>
                                <li className="nav-item active dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Shop by
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to='/api/products/shopby/Men'>Men</Link></li>
                                        <li><Link className="dropdown-item" to='/api/products/shopby/Women'>Women</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to='/api/products/shopby/Boys'>Boys</Link></li>
                                        <li><Link className="dropdown-item" to='/api/products/shopby/Girls'>Girls</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <Route render={({ history }) => <SearchBox history={history} />} />
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/liked">
                                        <i className="far fa-heart" style={{fontSize:26}}></i>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/cart">
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
                                            href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                                {userInfo.name}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className="dropdown-item" to='/profile'>
                                                        <i className="fas fa-user-edit"></i> Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <p className="dropdown-item"
                                                    onClick={logoutHandler}>
                                                        <i className="fas fa-sign-out-alt"></i> Logout
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    : <Link className="nav-link active" to="/login">
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
                <div className="container-xl my-1">
                    <div className="header-mobile__toggle-sidebar">
                        <button><i className="fa fa-bars"></i></button>
                    </div>
                    <Route render={({ history }) => <SearchBox mobile history={history} />} />
                    <div className="header-mobile__icons-container ml-auto mr-1 d-flex justify-content-center align-items-center">
                        <Link to="/cart">
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
                            className="nav-link active" to="/login">
                                <i className="fas fa-user-circle"></i>
                            </Link>
                        }
                        
                    </div>
                    <div className="header-mobile__sidebar hide">
                        <i className="fa fa-times float-right closeSidebar" style={{color:"#000", cursor: "pointer", fontSize: 20}}></i>
                        <br />
                        <img className="logoImage" src="https://res.cloudinary.com/alchemy069/image/upload/v1611065433/alchemy/a_sample_1_qsj6cf.png" alt=""/>
                        <Link to="/">
                            Home
                        </Link>
                        <br />
                        <Link to="/about">
                            About us
                        </Link>
                        <br />
                        <Link to="/liked">
                            Liked Products
                        </Link>
                        <br />
                        <p>
                            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Shop By <i className="fa fa-chevron-down"></i>
                            </a>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body font-black">
                                <div className="d-flex flex-column">
                                    <Link to="/api/products/shopby/Men">Men</Link>
                                    <Link to="/api/products/shopby/Women">Women</Link>
                                    <Link to="/api/products/shopby/Boys">Boys</Link>
                                    <Link to="/api/products/shopby/Girls">Girls</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}
