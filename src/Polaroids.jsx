import React from "react";
import Polaroid from "./Polaroid";
import './Polaroids.css';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";


const Polaroids = ({images}) => {

    const comp = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {}, comp)
            const tl = gsap.timeline()
            tl.from("#polaroid-0", {
                // scrollTrigger:
                x: 500,
                opacity: 0,
                duration: 1,
                // clearProps: "transform"
            }).from("#polaroid-1", {
                x: -500,
                opacity: 0,
                duration: 1,
            }).from("#polaroid-2", {
                x: 500,
                opacity: 0,
                duration: 1,
            }).from("#polaroid-3", {
                x: -500,
                opacity: 0,
                duration: 1,
            }).from("#polaroid-4", {
                x: 500,
                opacity: 0,
                duration: 1,
            }).from("#polaroid-5", {
                x: -500,
                opacity: 0,
                duration: 1,
            })
        return () => ctx.revert()
    }, [])

    return (
        <div className="container__polaroids" ref={comp}>
            {images.map((image, index) => (
                <Polaroid image={image} desc={image.desc} key={index} id={`polaroid-${index}`}/>
            ))}
        </div>
    )
}

export default Polaroids;