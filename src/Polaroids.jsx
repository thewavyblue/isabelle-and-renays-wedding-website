import React, { useLayoutEffect, useRef } from "react";
import Polaroid from "./Polaroid";
import Button from "./Button";
import "./Polaroids.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Polaroids = ({ images }) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const totalHeight = (images.length - 1) * 300;

    // make container tall enough for the whole trail
    gsap.set(".container__polaroids", { height: totalHeight + window.innerHeight });

    images.forEach((_, i) => {
      gsap.fromTo(
        `#polaroid-${i}`,
        {
          x: i % 2 === 0 ? "110vw" : "-110vw",
          y: 0,
          rotation: gsap.utils.random(-20, 20),
        },
        {
          x: gsap.utils.random(-50, 50),
          y: i * 250,
          rotation: gsap.utils.random(-15, 15),
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".container__polaroids",
            start: () => `200+=${i * 250} top`, // stagger by scroll
            end: () => `+=300`,
            scrub: true,
            // markers: true,
          },
        }
      );
    });
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
    <div id="skip">
      <Button link={"#intro"} buttonLabel={"Jump to info"}/>
      </div>
    </div>
  );
};

export default Polaroids;