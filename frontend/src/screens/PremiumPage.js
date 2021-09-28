import React from 'react'
import './PremiumPage.css'

export default function PremiumPage() {
    return (
        <div className='container'>
            <h4 className='my-3'>Become premium member of SS-Store</h4>
            <div className="customized-card">
                <h5 className='mx-5 pt-4 pb-1 fw-bold'>
                    Our premium plans -
                </h5>
                <div className="line">
                </div>
                <div className="d-flex flex-wrap">
                    <div className='straight-card'>
                        <h4 className='mt-5 mb-4 text-center'>
                            Freemium
                        </h4>
                        <div class="price-value" style={{paddingLeft: '1.5rem'}}><span class="currency">₹</span><span class="amount">0</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content mt-2">
                            <li>1 week delivery</li>
                            <li>Access all products</li>
                            <li>24 x 7 support</li>
                        </ul>
                        <button className='btn bg-danger text-white d-flex mx-auto'>
                            Continue
                        </button>
                    </div>
                    
                    <div className='straight-card'>
                        <h4 className='mt-5 mb-4 text-center'>
                            Standard
                        </h4>
                        <div class="price-value"><span class="currency">₹</span><span class="amount">49</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content mt-2">
                            <li>3 day delivery</li>
                            <li>Chat option</li>
                            <li>Early access to products</li>
                            <li>Newsletters</li>
                        </ul>
                        <button className='btn bg-danger text-white d-flex mx-auto'>
                            Continue
                        </button>
                    </div>

                    <div className='straight-card'>
                        <h4 className='mt-5 mb-4 text-center'>
                            Premium
                        </h4>
                        <div class="price-value"><span class="currency">₹</span><span class="amount">99</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content mt-2">
                            <li>2 day delivery</li>
                            <li>Exclusive discounts</li>
                            <li>Early access for products</li>
                            <li>Buy 1 Get 1 offers</li>
                        </ul>
                        <button className='btn bg-danger text-white d-flex mx-auto'>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
