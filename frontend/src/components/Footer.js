import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container container-xl">
                <div className="footer-container__left-display">
                    <div className="footer-container__each-detail">
                        <i className="fas fa-question"></i>
                        <a target="_self" href="#">
                            <h6>FAQ</h6>
                        </a>
                    </div>
                    <div className="footer-container__each-detail">
                        <a target="_self" href="#">
                            <h6>Leave a message</h6>
                        </a>
                    </div>
                    <div className="footer-container__each-detail">
                        <a target="_self" href="#">
                            <h6>About us</h6>
                        </a>
                    </div>
                </div>
                <div className="footer-container__right-display">
                    <span className="footer-container__icons-heading">
                        We are on:
                    </span>
                    <div className="icons-container">
                        <a target="_self" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_self" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a target="_self" href="#">
                            <i className="far fa-envelope"></i>
                        </a>
                        <a target="_self" href="#">
                            <i className="fas fa-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
