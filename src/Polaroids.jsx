import React from "react";
import Polaroid from "./Polaroid";

const Polaroids = ({images}) => {
    return (
        <div className="container__polaroids">
            {images.map((image, index) => (
                <Polaroid image={image} desc={image.desc} key={index}/>
            ))}
        </div>
    )
}

export default Polaroids;