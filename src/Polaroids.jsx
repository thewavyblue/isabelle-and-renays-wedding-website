import React, { useLayoutEffect, useRef } from "react";
import Polaroid from "./Polaroid";
import "./Polaroids.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Polaroids = ({ images }) => {
const comp = useRef(null);

useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const totalScroll = Math.max(window.innerHeight * 1.5, images.length * 450);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: comp.current,
                start: "20% 80%",
                end: () => `+=${totalScroll}`,      // adjust scroll distance for animation
                scrub: true,
                pin: true,   
                pinSpacing: true,
                pinType: "transform",
                // markers: true,
            },
        });

        tl.from(
            images.map((_, i) => `#polaroid-${i}`),
            {
                x: (i) => (i % 2 === 0 ? "100vw" : "-100vw"), // alternate left/right
                rotation: () => gsap.utils.random(-20, 20), // random tilt
                duration: 1,
                stagger: 0.3, // <-- makes them fly in one by one
                ease: "power3.out"
            }
        );
    }, comp);

    return () => ctx.revert();
  }, [images]);

  return (
    <div className="container__polaroids" ref={comp}>
      {images.map((image, index) => (
        <Polaroid
          image={image}
          desc={image.desc}
          key={index}
          id={`polaroid-${index}`}
        />
      ))}
    </div>
  );
};

export default Polaroids;