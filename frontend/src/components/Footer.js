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
                        <Link to="/policy">
                            <h6>Privacy Policy</h6>
                        </Link>
                        
                    </div>
                    <div className="footer-container__each-detail">
                        <Link to="/contactus">
                            <h6>Contact us</h6>
                        </Link>
                    </div>
                    <div className="footer-container__each-detail">
                        <Link to="/termsandconditions">
                            <h6>T&C and Refund Policy</h6>
                        </Link>
                    </div>
                </div>
                <div className="footer-container__right-display">
                    <span className="footer-container__icons-heading">
                        We are on:
                    </span>
                    <div className="icons-container">
                        <a target="_blank" href="https://www.instagram.com/chaoticofficial_/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a target="_blank" href="mailto:support@chaoticstores.com">
                            <i className="far fa-envelope"></i>
                        </a>
                        <a target="_blank" href="#">
                            <i className="fas fa-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
