import React, { useEffect, useRef } from "react";
import Typed from "react-typed";
import { gsap, Power3 } from "gsap";
import p1 from "../assets/leaf01.png";
import p2 from "../assets/leaf02.png";
import p3 from "../assets/leaf03.png";
import p4 from "../assets/leaf04.png";
import p5 from "../assets/leaf05.png";
import Parallax from "parallax-js";
import Animated from "./Animated";

const Hero = () => {
  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);

  useEffect(() => {
    // var tl = gsap
    //   .timeline()
    //   .fromTo(
    //     t1.current,
    //     {
    //       rotation: "-5",
    //     },
    //     {
    //       rotation: "5",
    //       ease: Power3.easeIn,
    //       repeat: -1,
    //       duration: 2,
    //       yoyo: true,
          
    //     }
    // )
      // .fromTo(
      //   t2.current,
      //   {
      //     x: -100,
      //   },
      //   {
      //     x: 0,
      //     ease: Power3.easeInOut,
      //   }
      // );

    //fade effect
    gsap.registerEffect({
      name: "fade",
      effect: (targets, config) => {
        return gsap.fromTo(
          targets,
          { opacity: 0 },
          { duration: config.duration, opacity: 1, stagger: 0.5 }
        );
      },
      defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
      extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });

    // now we can use it like this:
    gsap.effects.fade(".layer");

    //parallax scene
    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);
  }, []);
  return (
    <>
      <div className="hero text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          {/* <Animated /> */}
          <p ref={t1} className="text-[#00df9a] font-bold p-2">
            Web Developper
          </p>
          <h1
            ref={t2}
            className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
          >
            Benassila Reda.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Building{" "}
              <Typed
                className="md:text-5xl sm:text-4xl text-[#00df9a] text-xl font-bold md:pl-4 pr-1"
                strings={[" Front", " Back"]}
                typeSpeed={25}
                // backSpeed={140}
                // loop
              />
            </p>

            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              - End Apps
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            “Any application that can be written in JavaScript, will eventually
            be written in JavaScript.”
          </p>
          <p className="md:text-xl text-md font-bold text-gray-400">
            Jeff Atwood
          </p>
          <button className=" w-[200px] rounded-md font-medium my-6 bg-gray-50/70 mx-auto py-3 text-black">
            Get In Touch
          </button>
        </div>
        <div className="stars">
          <ul id="scene">
            <li className="layer" data-depth="-.1">
              <img src={p1} alt="" />
            </li>
            <li className="layer" data-depth="-.3">
              <img src={p2} alt="" />
            </li>
            <li className="layer" data-depth="-1.5">
              <img src={p3} alt="" />
            </li>
            <li className="layer" data-depth=".1">
              <img src={p4} alt="" />
            </li>
            <li className="layer" data-depth=".3">
              <img src={p5} alt="" />
            </li>
          </ul> 
        </div>
      </div>
    </>
  );
};

export default Hero;
