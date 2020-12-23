import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '../minicomponents/CardImage'
import HeroTitle from '../minicomponents/HeroTitle'

// Tshirts, Hoodies, 
// Posters, Stickers, 
// Mask, Tote Bags,
//  Laptop skins, all

export default function CategoryScreen() {
    return (
        <div className="CategoryScreen py-2">
            <HeroTitle text="Shop by Category"/>
            <div className="categories-container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Link to='/tshirts'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234146/alchemy/Slideshow/tees_c_nvdxc4.png"
                                title = 'Tshirts' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/hoodies'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234145/alchemy/hood_c_zqwnyb.png"
                                title = 'Hoodies' />
                        </Link>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <Link to='/posters'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234144/alchemy/Slideshow/poster_lpkjh1.png"
                                title = 'Posters' />
                        </Link>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/stickers'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606222610/alchemy/Slideshow/stickers_mozsgq.png"
                                title = 'Stickers' />
                        </Link>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/mask'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234141/alchemy/Slideshow/mask_uf9tce.png"
                                title = 'Mask' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/tote'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234143/alchemy/Slideshow/bag_c_gw7zze.png"
                                title = 'Tote Bags' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/notebooks'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234146/alchemy/Slideshow/notebook_c_qqgqd0.png"
                                title = 'Notebooks' />
                        </Link>
                    </div>

                    <div className="col">
                        <Link to='/allProducts'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606234145/alchemy/hood_c_zqwnyb.png"
                                title = 'All Products' centered={true} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
