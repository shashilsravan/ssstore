import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container container-xl">
                <div className="footer-container__left-display">
                    <div className="footer-container__each-detail">
                        <i className="fas fa-question"></i>
                        <Link to="/allProducts">
                            <h6>Complete store</h6>
                        </Link>
                        
                    </div>
                    <div className="footer-container__each-detail">
                        <Link to="/contactus">
                            <h6>Leave a message</h6>
                        </Link>
                    </div>
                    <div className="footer-container__each-detail">
                        <Link to="/">
                            <h6>About us</h6>
                        </Link>
                    </div>
                </div>
                <div className="footer-container__right-display">
                    <span className="footer-container__icons-heading">
                        We are on:
                    </span>
                    <div className="icons-container">
                        <Link to="/">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="/">
                            <i className="far fa-envelope"></i>
                        </Link>
                        <Link to="/">
                            <i className="fas fa-phone"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
