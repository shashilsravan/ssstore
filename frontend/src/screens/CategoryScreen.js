import React from 'react'
import { Link } from 'react-router-dom'
import DealProducts from '../components/DealProducts'
import TopCarousel from '../components/TopCarousel'
import TopProducts from '../components/TopProducts'
import CardImage from '../minicomponents/CardImage'
import Meta from '../minicomponents/Meta'
import HeroTitle from '../minicomponents/HeroTitle'


export default function CategoryScreen() {
    return (
        <>
        <Meta />
        <div className="CategoryScreen py-2">
            <TopCarousel />
            <HeroTitle text="Exclusive Deals"/>
            <DealProducts />
            <br />
            <HeroTitle text="Top Sellers"/>
            <TopProducts />
            <br />
            <HeroTitle text="Shop by Category"/>
            <div className="categories-container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Link to='/tshirts'>
                            <CardImage src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F10%2Fsupreme-fall-2019-tees-13.jpg?q=75&w=800&cbr=1&fit=max"
                                title = 'Tshirts' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/hoodies'>
                            <CardImage src="https://img.gta5-mods.com/q95/images/hoodies-collection/d311ca-Grand%20Theft%20Auto%20V%2022_12_2018%2015_06_41.jpg"
                                title = 'Hoodies' />
                        </Link>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <Link to='/posters'>
                            <CardImage src="https://unframed.lacma.org/sites/default/files/styles/article_full/public/field/image/EX8634-part2-VW006.jpg?itok=5MpVLJDj"
                                title = 'Posters' />
                        </Link>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/stickers'>
                            <CardImage src="https://previews.123rf.com/images/yummybuum/yummybuum1911/yummybuum191100011/133739251-diary-stickers-daily-planner-note-paper-labels-organizer-schedule-trendy-lettering-reminders-and-boo.jpg"
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
                        <Link to='/api/products/category/notebooks'>
                            <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHEpzFjdoAuBHIs5fLDqhMLXjzGPd0eFZnw&usqp=CAU"
                                title = 'Notebooks' />
                        </Link>
                    </div>  
                    
                    <div className="col-md-6 col-lg-4">
                        <Link to='/api/products/category/tote'>
                            <CardImage src="http://www.hypebeast.com/image/2009/11/flavor-porter-hello-my-name-is-tote-bag.jpg"
                                title = 'Tote Bags' />
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Link to='/allProducts'>
                            <CardImage src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/7-ecommerce-content-marketing-examples-for-2019.png"
                                title = 'All Products' centered={true} />
                        </Link>
                    </div>

                </div>
            </div>
            <br />
        </div>
        </>
    )
}
