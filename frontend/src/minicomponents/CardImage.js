import React from 'react'
import '../screens/CategoryScreen.css'
export default function CardImage({src, title, centered}) {
    return (
        <div className="CardImage">
            <div className="card mt-4">
                <div className="zoom-effect-container">
                    <div className="image-card">
                        <img alt={title} src={src} className="card-img-top"/>
                    </div>
                </div>
                <div className={centered ?"card-body centered-text" : "card-body"}>
                    <h6 className="card-title">
                        {title}
                    </h6>
                </div>
            </div>
        </div>
    )
}
