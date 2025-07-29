import React from "react";
import "./Polaroid.css";

export default function Polaroid({image}) {
    return (
        <div className="wrapper__polaroid">
            <div className="image-holder">
                <img src={image.src} alt=""/>
            </div>
            <div className="center">
                <p className="handwriting">
                    {image.desc ? image.desc : "Placeholder text goes here over two lines" }
                </p>
            </div>
        </div>
    )
}