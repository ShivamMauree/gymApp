import React from 'react'

const bodypart = ({ title, svgContent }) => {
    return (
        <div className="body_part-container">
            <div className="body_part" dangerouslySetInnerHTML={{ __html: svgContent }} />
            <h1>{title}</h1>
        </div>
    );
}
export default bodypart
