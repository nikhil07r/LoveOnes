import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/others/Navbar";
import CircularText from "../components/CircularText/CircularText";
import CircularGallery from "../components/CircularGallery/CircularGallery";

import Lenis from "lenis";
import Masonry from "../components/Masonry/Masonry";
import FallingText from "../components/FallingText/FallingText";
import { motion } from "framer-motion";
import SnowflakeCursor from "../components/All Cursors/SnowFlakeCursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { NavLink } from "react-router-dom";

function Home() {
  const boxRef = useRef();

  const lenis = new Lenis({
    lerp: 11,
    duration: 3.6,
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Animation Part

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      ".layer-2",
      {
        y: -30,
        scaleY: 0.5,
        rotateX: 45,
        duration: 0.8,
        opacity: 0,
        delay: 1.1,
        ease: "power3.inOut",
      },
      "start"
    );

    tl.from(".layer-1", {
      y: 30,
      scaleY: 0.8,
      rotateX: 45,

      duration: 0.7,
      opacity: 0,
      delay: 0.1,
      ease: "power3.inOut",
    });

    tl.from(".top-circle-text", {
      y: 30,
      scaleY: 0.2,
      rotateX: 90,
      rotateY: 90,
      duration: 1,
      opacity: 0,
      delay: 0.2,
      ease: "power3.inOut",
    });
    tl.from(".main-title", {
      y: 40,
      x: -50,
      scaleY: 0.3,
      height: 1,
      rotateX: 90,
      // rotateY: -90,

      duration: 1,
      opacity: 0,
      delay: 0.2,
      ease: "power3.inOut",
    });

    gsap.from(".hero-left .text-area .name", {
      y: 30,
      x: 25,
      scaleY: 0.3,
      rotateX: 45,

      duration: 0.7,
      opacity: 0,
      delay: 0.5,
      ease: "power.inOut",
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(
      ".hero-left .text-area .good-para ,.hero-left .text-area  .about-us",
      {
        y: 30,
        x: 25,
        scaleY: 0.3,
        rotateX: 45,

        duration: 0.9,
        opacity: 0,
        delay: 0.9,
        ease: "power.inOut",
        scrollTrigger: {
          trigger: ".page2",
          scroller: "body",
          // markers:true,
          start: "top 55%",
          end: "bottom 30%",
          toggleActions: "play none none reverse", // (optional) Controls animation behavior
        },
      }
    );

    gsap.from(".hero-right .img1-mam ", {
      y: -20,
      scaleY: 0.5,

      duration: 0.9,
      opacity: 0,
      delay: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        // markers:true,
        start: "top 45%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });
    gsap.from(".hr-line   ", {
      y: -30,
      height: 10,
      // x:25,
      scaleX: 0.3,
      rotateX: 45,

      duration: 0.9,
      opacity: 0,
      delay: 1,
      ease: "power.inOut",
      scrollTrigger: {
        trigger: ".hr-line",
        scroller: "body",
        // markers:true,
        start: "top 85%",
        end: "bottom 50%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page3 .gallery , .spring-flowers1 ", {
      y: -30,
      height: 10,
      // x:25,
      // scaleY: 0.3,
      rotateX: 45,

      duration: 0.9,
      opacity: 0,
      delay: 1,
      stagger: 0.5,
      ease: "power.inOut",
      scrollTrigger: {
        trigger: " .gallery",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page3 .cards-gallery  ", {
      y: -30,
      rotateY: 45,

      duration: 0.9,
      opacity: 0,
      delay: 0.7,
      ease: "power.inOut",
      scrollTrigger: {
        trigger: " .page3 .cards-gallery ",
        scroller: "body",
        // markers: true,
        start: "top 38%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page4  >img ", {
      opacity: 0,

      // rotateX: 90,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page4 .slider-heading ", {
      opacity: 0,
      scaleX: 0,
      y: 100,
      width: 10,
      // rotateX: 90,
      duration: 1.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page4 .drag-img", {
      opacity: 0,
      scaleX: 0,
      y: 100,
      width: 10,
      // rotateX: 90,
      duration: 1.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers: true,
        start: "top 45%",
        end: "top 30%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page5 .slider-heading2 , .Spring-flowers2  ", {
      opacity: 0,
      scaleX: 0,
      y: 100,
      width: 10,
      // rotateX: 90,
      duration: 1.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });
    gsap.from(".page5 ", {
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });

    gsap.from(".page5 .image-area ", {
      opacity: 0,
      scaleY: 0,
      y: -100,
      // width: 10,
      rotateX: 90,
      duration: 1.5,
      ease: "power3.inOut",
      stagger: true,
      scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "bottom 35%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });
    gsap.from(".page5 .end-msg1", {
      y: 60, // from below
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        toggleActions: "play none none reverse", // (optional) Controls animation behavior
      },
    });
  });

  return (
    <>
      <div className="h-full w-full bg-[#fefae0]">
        <SnowflakeCursor />

        <div className="page1 w-full h-screen px-4">
          <Navbar />

          <div className="hero1 w-full h-[82%] mt-28">
            <div className="flowers-area w-full h-full relative">
              <div className="mam-name h-full w-full absolute z-[1]">
                <div className="cont w-3/4 h-3/4">
                  <div className="top-circle-text flex justify-center w-1/4 h-1/2 relative left-[54%]">
                    <CircularText
                      text="Our*Cutiee*Mam*"
                      onHover="speedUp"
                      spinDuration={20}
                      className="custom-class uppercase text-[#847B1A]"
                    />
                  </div>
                  <div className="main-title w-[80%] h-[50%] flex absolute left-[15%] bottom-25">
                    <h1 className="text-[#847B1A] font-serif uppercase text-[9em] text-center">
                      Miss Deepa
                    </h1>
                  </div>
                </div>
              </div>

              <div className="layer-1 w-full h-[80%] absolute bottom-[-6%] z-10 flex justify-between">
                <div className="left-flower">
                  <img src="/flowers/Left_flower.png" loading="lazy" alt="" />
                </div>
                <div className="left-flower">
                  <img
                    src="/flowers/Left_flower.png"
                    loading="lazy"
                    className="rotate-y-180"
                    alt=""
                  />
                </div>
              </div>

              <div className="layer-2 w-full h-[88%] flex justify-center top-[11%] absolute bottom-[-5%] left-0 z-[10]">
                <img
                  src="/flowers/Spring2.png"
                  className="h-full w-full z-20 absolute bottom-0 left-[0%]"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="page2 w-full h-auto">
          <div className="hero2 w-full min-h-screen px-20 flex items-center">
            <div className="hero-inner w-full h-full flex flex-col lg:flex-row px-4 lg:px-10">
              <div className="hero-left w-full lg:w-1/2 p-6 border rounded-3xl">
                <div className="text-area w-full h-full p-4">
                  <h1 className="name text-5xl font-mono text-[#958c23] mt-10 font-bold">
                    Mari Pyari Chuiya
                  </h1>
                  <p className="good-para text-black font-mono mt-10">
                    You is the most important part of my life. You has such a
                    sweet and talking nature that makes me feel so comfortable
                    with you. Your smile is just too good, it honestly makes my
                    whole day 🙈. You love the rain, and just like the rain
                    refreshes everything, you brings peace and happiness into my
                    life. I feel really lucky to have you in my life.❤
                  </p>
                  <button className="about-us text-black font-semibold mt-10 px-10 py-2 rounded-full cursor-pointer border border-[#958c23]">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      {" "}
                      <h1 className="text-2xl  cursor-pointer">About you</h1>
                    </NavLink>
                  </button>
                </div>
              </div>

              <div className="hero-right w-full lg:w-1/2 flex items-center justify-center">
                <img
                  src="/DeepaMadam/Gall/Main.jpg"
                  className="w-[80%] sm:w-[70%] md:w-[60%] max-h-[490px] object-cover rounded-tl-[80px] rounded-tr-[80px] shadow-md"
                  alt="Miss Deepa"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-[#8fc317] hr-line w-[80%] h-[1px] m-auto" />

        <div className="page3 Illutrations w-full h-screen py-5 relative">
          <div
            className="spring-flowers1 w-[50%] h-100 bg-cover bg-center absolute z-[10] left-0"
            style={{ backgroundImage: "url('/Videos/AnimationFl.gif')" }}
          ></div>

          <div className="heading w-full h-27 py relative flex flex-col gap-5 mt-10">
            <h1 className="gallery text-8xl font-serif uppercase text-center">
              Gallery
            </h1>
            <div className="line bg-[#847B1A] w-[60%] h-[1.3px] absolute left-[20%] bottom-[10%] "></div>
          </div>

          <div className="cards-gallery w-full h-[95%] bg-[#fefae0]">
            <CircularGallery />
          </div>
        </div>

        <div className="gold-line w-[80%] mx-30 h-20 flex justify-center items-center mt-20">
          <img src="/Lines/LineCom 2.png" width={1000} alt="" loading="lazy" />
        </div>

        <div className="page4 w-full h-[140vh] mt-20 relative bg-no-repeat bg-cover">
          <img
            src="/flowers/Flower_bg.jpg"
            loading="lazy"
            className="w-full h-full object-fit bg-cover absolute top-0 left-0 right-0"
            alt=""
          />

          <div className="falling-text absolute left-0 top-0 z-[1] h-full w-full">
            <FallingText id="falling-text" />
          </div>

          <div className="slider-heading w-full h-30 bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-200 mt-10 flex items-center justify-center py-10 tracking-widest">
            <h1 className="text-center text-[#847B1A] uppercase text-8xl font-serif">
              Beauty
            </h1>
          </div>

          <div
            ref={boxRef}
            className="layout-area w-full h-screen flex justify-center items-center relative"
          >
            <div className="grid grid-cols-2 mt-4 grid-rows-2 gap-5 p-10 z-10">
              <motion.div
                drag
                dragConstraints={boxRef}
                style={{ backgroundImage: "url('/DeepaMadam/Boxes/Box1.jpg')" }}
                className="drag-img object-cover bg-center bg-cover w-75 h-75 border cursor-grab rounded-xl flex justify-center items-center shadow-md bg-white"
              />
              <motion.div
                drag
                dragConstraints={boxRef}
                style={{ backgroundImage: "url('/DeepaMadam/Boxes/Box2.jpg')" }}
                className="drag-img object-cover bg-center bg-cover w-75 h-75 border rounded-xl flex justify-center items-center shadow-md bg-white cursor-grab"
              />
              <motion.div
                drag
                dragConstraints={boxRef}
                style={{ backgroundImage: "url('/DeepaMadam/Boxes/Box3.jpg" }}
                className="drag-img object-cover bg-center bg-cover w-75 h-75 border rounded-xl flex justify-center items-center shadow-md bg-white cursor-grab"
              />
              <motion.div
                drag
                dragConstraints={boxRef}
                style={{ backgroundImage: "url('/DeepaMadam/Boxes/Box4.jpg')" }}
                className="drag-img object-cover bg-center bg-cover w-75 h-75 border rounded-xl flex justify-center items-center shadow-md bg-white cursor-grab"
              />
            </div>
          </div>
        </div>

        <div className="line bg-[#847B1A] w-[100%] h-[1.5px]"></div>

        <div
          className="page5 w-full h-screen bg-[#fefae0] shadow-lg bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('/backgrounds/Bg2.jpg')" }}
        >
          <div className="slider-heading2 w-full h-25 bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-200 flex items-center justify-center py-10 tracking-widest">
            <h1 className="text-center text-[#847B1A] uppercase text-8xl font-serif">
              Shiny
            </h1>
          </div>

          <div
            className="Spring-flowers2 w-[50%] h-100 bg-cover bg-center z-[100]"
            style={{ backgroundImage: "url('/Videos/AnimationFl.gif')" }}
          ></div>

          <div
            className="image-area w-[50%] h-[35%] rounded-4xl absolute left-[25%] top-[40%]  bg-cover bg-center flex justify-center items-center m-auto"
          
          >
<video
  className="image-area w-[70%] h-4xl rounded-4xl  z-[90] object-cover object-center transform -rotate-90 border-4 border-white shadow-lg"
  src="/DeepaMadam/videos/EyesBlink.mp4"
  autoPlay
  muted
  loop
  playsInline
  loading="lazy"
/>


          </div>

          {/* <div className="last w-[50%] h-15 absolute bottom-5 left-[25%] flex justify-center items-center end-msg">
            {"Bss Ab Ruk Jao..".split("").map((char, idx) => (
              <span
                key={idx}
                className="end-msg1 inline-block text-4xl font-bold text-center font-mono text-[#847B1A]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
