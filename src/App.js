import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Portfolio from './components/Portfolio';
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    gsap.fromTo('.analytics', {
      opacity: 0,
      y: '-50'
    }, {
      duration: 1,
      y: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.analytics',
        markers: false,
        start: 'top 65%',
        end: 'bottom 0%',
        toggleActions: 'play complete restart reverse',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      }
    });

    //zombie movement
    // gsap.to(".zmb", { x: 1800, duration: 20, ease: "none", repeat: 12, repeatDelay: 2, overwrite: "auto" })
    gsap.to(".zmn", {
      x: 2100, duration: 5, ease: "none", overwrite: "auto",
      scrollTrigger: {
        trigger: '.newsletter',
        markers: false,
        start: 'top center',
        end: '600 40%',
        scrub: 3,
        toggleActions: 'play complete restart reverse',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      }
    })


  }, []);
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
