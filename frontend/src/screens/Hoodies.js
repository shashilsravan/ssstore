import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Hoodies() {
    return (
        <div className="SubCategories SubHoodies my-4">
            <Meta title="Hoodies" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Hoodies" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/plainhoodies'>
                        <CardImage src="https://i.pinimg.com/736x/7a/7a/3c/7a7a3ce8603cd85c7c1060c0e89b6002.jpg"
                            centered={true} title="Plain Hoodies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/webseries'>
                        <CardImage src="https://www.redwolf.in/image/catalog/sweatshirts/conserve-energy-hoodie-india.jpg"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/cartoons'>
                        <CardImage src="https://gta5mod.net/wp-content/uploads/2020/07/Hoodies-Collection2-scaled.jpg"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/memesandquotes'>
                        <CardImage src="https://preview.free3d.com/img/2019/08/2279639688308327973/i585foef-900.jpg"
                            centered={true} title="Memes and Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/superheroes'>
                        <CardImage src="https://www.filmyvastra.com/wp-content/uploads/2019/10/Pocket-Avenger-White-Hoodie_opt.jpg"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/games'>
                        <CardImage src="https://cdn.vox-cdn.com/thumbor/PStWu2Ys-9cff3cL6uICml2BHYA=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21818824/champion.jpg"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/music'>
                        <CardImage src="https://i.ytimg.com/vi/UGanCHpqMOo/mqdefault.jpg"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/api/products/category/hoodies'>
                        <CardImage src="https://preview.free3d.com/img/2019/08/2279639688308327973/i585foef-900.jpg"
                            centered={true} title="All Hoodies" />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
