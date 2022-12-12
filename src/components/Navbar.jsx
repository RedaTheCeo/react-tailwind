import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { gsap, Power2, Bounce, Expo } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);
  const titleRef = useRef(null);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // gsap.fromTo(navRef.current, {
    //   y: -70
    // }, {
    //   y: 0,
    //   ease: Power2.easeInOut
    // });
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        ease: Expo.easeInOut,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".links li",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        ease: Power2.easeInOut,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <h1 ref={titleRef} className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/">BEN R.</Link>
      </h1>
      <ul className="links hidden md:flex">
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link
            onClick={() =>
              document
                .getElementById("profile")
                .scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
          >
            Profile
          </Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
          >
            Skills
          </Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 ref={titleRef} className="w-full text-3xl font-bold text-[#00df9a]">
          <Link to="/">BEN R.</Link>
        </h1>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link
            onClick={() =>
              document
                .getElementById("profile")
                .scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
          >
            Profile
          </Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
          >
            Skills
          </Link>
        </li>
        <li className="p-4 font-mono font-light text-white hover:text-[#65f1c4] duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
