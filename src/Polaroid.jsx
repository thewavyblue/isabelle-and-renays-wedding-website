import React from "react";
import "./Polaroid.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



export default function Polaroid({image}) {

useGSAP(() => {
    gsap.to(".wrapper__polaroid", { rotation: "+=360", duration: 2 });
});

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