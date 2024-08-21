import React from 'react'
import "./feature.css"


const Feature = ({title, text}) => {
    return (
        <div className="gym__feature-container">
            <div className="gym__feature-title_container">

                <div className="gym__feature-gradient_bar">

                </div>
                <div className="gym__feature-title">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="gym__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Feature
