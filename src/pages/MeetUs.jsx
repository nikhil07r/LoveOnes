import React, { useRef } from "react";
import Navbar from "../components/others/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SnowflakeCursor from "../components/All Cursors/SnowFlakeCursor";
import Lenis from "lenis";

function MeetUs() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 22,
    duration: 3.5,
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Page 1 Animations
    tl.from(
      ".page1 .hero-right1",
      {
        height: 0,
        y: 80,
        x: 0,
        z: -2,
        scaleY: 0.8,
        opacity: 0,
        duration: 1.4,
        delay: 0.2,
        ease: "power4.out",
        stagger: 0.15,
      },
      "start"
    );

    tl.from(
      ".page1 .hero-left",
      {
        height: 0,
        scaleX: 0,
        y: 80,
        x: 0,
        z: -2,
        scaleY: 0.8,
        opacity: 0,
        duration: 1.4,
        delay: 0.2,
        scrub: 2,
        ease: "power4.out",
        stagger: 0.15,
      },
      "start"
    );

    tl.from(
      ".our-meet",
      {
        y: 60,
        opacity: 0,
        duration: 2,
        delay: 0.7,
        scrub: 2,
        ease: "power3.out",
        stagger: 0.05,
      },
      "start"
    );

    tl.from(".para-msg1", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      scrub: 2,
      ease: "power3.out",
      stagger: 0.03,
    });

    // Page 2 Animations
    gsap.from(".page2 .hero-left2, .blossom", {
      height: 0,
      opacity: 0,
      duration: 1,
      ease: "power.inOut",
      scrub: 2,
      stagger: 0.001,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });

    gsap.from(".page2 .hero-right2, .msg-cont3", {
      height: 0,
      y: 80,
      x: 100,
      z: -2,
      scaleY: 0.8,
      opacity: 0,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      scrub: 2,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });

    gsap.from(".para-msg2", {
      y: 60,
      x: -19,
      opacity: 0,
      duration: 2,
      delay: 0.6,
      ease: "expo.inOut",
      stagger: 0.001,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });

    // Page 3 Animations
    gsap.from(".page3 .hero-right3, .blossom2", {
      height: 0,
      y: 80,
      x: 0,
      z: -2,
      scaleY: 0.8,
      opacity: 0,
      duration: 1.3,
      delay: 0.2,
      ease: "power3.inOut",
      scrub: 2,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });

    gsap.from(".page3 .Going-on", {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrub: 2,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });

    gsap.from(".para-msg3", {
      y: 60,
      x: -19,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
      ease: "expo.inOut",
      scrub: 2,
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 60%",
        end: "bottom 30%",
      },
    });
  });

  return (
    <>
      <div className="w-full h-auto bg-[#fefae0] px-4">
        <Navbar />
        <SnowflakeCursor />

        {/* PAGE 1 */}
        <div className="page1 w-full h-[82vh] mt-27 flex mb-10">
          <div className="hero-left w-[55%] h-full flex justify-center items-center">
            <div className="w-3/4 h-[95%] border rounded-xl p-5 px-2 flex justify-center items-center">
              <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10 max-w-[650px] text-center flex flex-col justify-center items-center">
                <h1 className="our-meet text-6xl font-mono font-bold mb-8">
                  {"Our Meet".split("").map((char, idx) => (
                    <span
                      key={idx}
                      className="chars-text inline-block text-[#847B1A]"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>

                <p className="leading-[2em] good-para text-black font-mono flex flex-wrap justify-center gap-[4px] max-w-[600px]">
                  {"Jab hum pehli baar mile the na, sab kuch kitna natural lag raha tha 😄✨. Hasna, masti, thoda sa sharmaana — sab kuch ek dum filmy tha 🎬💫. Har moment mein ek nayi energy thi ⚡, jaise time hi ruk gaya ho ⏳. Humne pictures liye 📸, chhoti-chhoti baatein share ki 💬, aur har second mein connection aur deep hota gaya 💖. Us din ke baad se, har yaad ek smile chhupa ke rakhti hai 😊 — jaise dil keh raha ho, ‘haan, yeh start kuch khaas tha’ 💞"
                    .split(" ")
                    .map((word, idx) => (
                      <span key={idx} className="inline-flex">
                        {Array.from(word).map((char, cIdx) => (
                          <span key={cIdx} className="para-msg1 inline-block">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right1 w-1/2 h-full flex justify-center items-center">
            <div
              className="image-cont w-[80%] h-full rounded-4xl border bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/DeepaMadam/Meets/PuppyLove.jpg')",
              }}
            ></div>
          </div>
        </div>

        {/* PAGE 2 */}
<div className="page2 w-full min-h-screen mt-20 flex flex-col lg:flex-row items-center justify-center relative px-6 lg:px-16 gap-10">
  {/* Left Image Section */}
  <div className="hero-left2 w-full lg:w-1/2 h-[350px] lg:h-[90vh] flex justify-center items-center">
    <div
      className="w-full h-full rounded-3xl border shadow-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/DeepaMadam/Meets/Kissi.jpg')",
      }}
    ></div>
  </div>

  {/* Right Text Section */}
  <div className="hero-right2 w-full lg:w-1/2 h-auto lg:h-[90vh] flex justify-center items-center">
    <div className="w-full lg:w-[90%] h-auto lg:h-[80%] border rounded-3xl shadow-md bg-white/60 backdrop-blur-md flex justify-center items-center p-8 lg:p-10">
      <div className="msg w-full text-center max-w-[650px]">
        <h1 className="text-4xl lg:text-6xl font-bold font-mono text-[#958c23] mb-8">
          Supportive
        </h1>

        <p className="text-black font-mono text-[1rem] lg:text-[1.1rem] leading-[1.8em] flex flex-wrap justify-center gap-[4px]">
          {"The last time we met, everything felt so still like the world paused for us 🕰️. You were talking smiling in that effortless way you do 😊 and I just kept watching… soaking in every second. There was so much I wanted to say but words felt too small. So instead, I leaned in and kissed your forehead gentle, quiet, and full of everything I couldn’t put into words 💖. That moment still lingers… like a calm memory I never want to fade 🌙."
            .split(" ")
            .map((word, idx) => (
              <span key={idx} className="inline-flex">
                {Array.from(word).map((char, cIdx) => (
                  <span key={cIdx} className="para-msg2 inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
        </p>
      </div>
    </div>
  </div>

  {/* Decorative Blossom */}
  <div
    className="blossom w-32 h-32 lg:w-56 lg:h-56 absolute bottom-6 left-4 bg-center bg-contain bg-no-repeat opacity-80"
    style={{
      backgroundImage: "url('/flowers/simple2.png')",
    }}
  ></div>
</div>


        {/* PAGE 3 */}
        <div className="page3 bg-[#fefae0] w-full h-[100vh] mt-20 flex relative">
          <div className="hero-left3 w-1/2 h-full flex justify-center items-center">
            <div className="msg-cont3 w-3/4 h-[90%] border rounded-xl px-6">
              <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
                <h1 className="Going-on text-center text-4xl font-bold font-mono text-[#958c23]">
                  and It's Going On..
                </h1>

                <p className="leading-[2em] good-para text-black font-mono mt-10 flex flex-wrap justify-center gap-[4px] max-w-[600px]">
                  {"Some bonds don’t come with a deadline — they just flow, day by day, message by message , memory by memory . We still tease each other, still share the tiniest updates of our day , still argue over silly things 🙃, and still end up laughing about it all . There’s no official tag to this, no big promises — just two people, still choosing to stay connected , still being there in the most real and simple ways. And maybe that’s what makes it special — it’s still going on, effortlessly ."
                    .split(" ")
                    .map((word, idx) => (
                      <span key={idx} className="inline-flex">
                        {Array.from(word).map((char, cIdx) => (
                          <span key={cIdx} className="para-msg3 inline-block">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right3 w-1/2 h-[100vh] flex justify-center items-center">
            <div
              className="w-3/4 h-[90%] rounded-4xl border bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/DeepaMadam/Meets/MirrorPose.jpg')",
                objectFit: "cover",
              }}
            />
          </div>
          

          <div
            className="blossom2 w-60 h-55 absolute bottom-10 right-3 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/flowers/simple1.png')",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default MeetUs;
