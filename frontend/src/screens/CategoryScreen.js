import React from 'react'
import { Link } from 'react-router-dom'
import DealProducts from '../components/DealProducts'
import TopCarousel from '../components/TopCarousel'
import TopProducts from '../components/TopProducts'
import CardImage from '../minicomponents/CardImage'
import HeroTitle from '../minicomponents/HeroTitle'


export default function CategoryScreen() {
    return (
        <div className="CategoryScreen py-2">
            <TopCarousel />
            <HeroTitle text="Deals for Today"/>
            <DealProducts />
            <HeroTitle text="Shop by Category"/>
            <div className="categories-container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Link to='/tshirts'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608738575/alchemy/Thumbnails/tees_c_nvdxc4_n9vc7b.jpg"
                                title = 'Tshirts' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/hoodies'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608738690/alchemy/Thumbnails/hood_c_zqwnyb_g63a62.jpg"
                                title = 'Hoodies' />
                        </Link>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <Link to='/posters'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608738756/alchemy/Thumbnails/poster_lpkjh1_qwzmko.jpg"
                                title = 'Posters' />
                        </Link>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/stickers'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608738912/alchemy/Thumbnails/stickers_mozsgq_ttwabr.jpg"
                                title = 'Stickers' />
                        </Link>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/mask'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608738966/alchemy/Thumbnails/mask_uf9tce_pct2ne.jpg"
                                title = 'Mask' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/tote'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608739020/alchemy/Thumbnails/bag_c_gw7zze_oghl68.jpg"
                                title = 'Tote Bags' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/notebooks'>
                            <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608739088/alchemy/Thumbnails/notebook_c_qqgqd0_gnphxz.jpg"
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
            <br />
            <br />
            <HeroTitle text="Top Selling Products"/>
            <TopProducts />
        </div>
    )
}
