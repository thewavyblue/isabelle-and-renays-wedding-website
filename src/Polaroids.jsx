import React from "react";
import Polaroid from "./Polaroid";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// useGSAP(() => {
//     gsap.to(".wrapper__polaroid", { rotation: "+=360", duration: 2 });
// });


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