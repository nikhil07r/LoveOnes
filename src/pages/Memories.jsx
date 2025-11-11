import React from 'react';
import Navbar from '../components/others/Navbar';
import VideoShowcase from '../components/VideoShowcase';
import SnowflakeCursor2 from '../components/All Cursors/SnowFlakeCursor2';


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


function Memories() {


    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(".top-heading .chars-text", {
            height: 0, y: 80, x: 0, z: -2, scaleY: 0.8, opacity: 0,
            duration: 0.7, delay: 0.2, ease: "power4.out", stagger: 0.15
        });

        tl.from(".main .hr-line1", {
            height: 0, width: 0, y: 20, scaleX: 0.8, opacity: 0,
            duration: 1, delay: 0.1, ease: "power3.out"
        }, "start");


        tl.from(".main .hero1", {
             opacity: 0,
            duration: 1.3, delay: 0.2, ease: "power3.inOut", scrub: 2,
        });

        tl.from(".main .hero-left-1", {
            height: 0, y: 80, x: 0, z: -2, scaleY: 0.8, opacity: 0,
            duration: 1.3, delay: 0.2, ease: "power3.inOut", scrub: 2,
        });

        tl.from(".main .hero-right-1", {
            z: -2, scaleY: 0.8, opacity: 0,
            duration: 1.4, delay: 0.5, ease: "power4.out", stagger: 0.15
        });

        tl.from(".hero-right-1 .chars-text-h", {
            y: 60, opacity: 0, duration: 0.6, delay: 0.1, scrub: 2,
            ease: "power3.out", stagger: 0.03
        });

        tl.from(".hero-right-1 .para-msg1", {
            y: 60, opacity: 0, duration: 1, delay: 0.1, scrub: 2,
            ease: "power3.out", stagger: 0.03
        });




        // <-------------Maples part 1 Animations------------>

        tl.from(".main .maple1", {
            height: 0, width: 0, y: 20, scaleX: 0.8, opacity: 0,
            duration: 1.2, delay: 0.1, ease: "power4.out"
        }, "-=0.5");
        tl.from(".main .maple2", {
            height: 0, width: 0, y: 20, scaleX: 0.8, opacity: 0,
            duration: 1.2, delay: 0.1, ease: "power4.out"
        }, "-=0.5");



gsap.to(".maple1",{
y:100,duration:1,ease:"power3.inOut",
            scrollTrigger:{
                trigger:".hero1",
                scroller:"body",
                start:"top 20%",
                end:"bottom 0%",
                
            toggleActions: "play none none reverse", 
        }
})

gsap.to(".maple2",{
y:-100,duration:1,ease:"power3.inOut",
            scrollTrigger:{
            trigger:".hero1",
            scroller:"body",
            start:"top 20%",
            end:"bottom 0%",
            toggleActions: "play none none reverse", 
        }
})

        // <-------------Part 2 Animations------------>

        gsap.from(".video-area", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.3, delay: 0.2, ease: "power3.inOut", scrub: 2, scrollTrigger: { trigger: ".hero2", scroller: "body", /* markers: true, */ start: "top 70%", end: "bottom 40%" } });

        gsap.from(".Spring-flowers2", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.3, delay: 1, ease: "power3.inOut", scrub: 2, scrollTrigger: { trigger: ".hero2", scroller: "body", /* markers: true, */ start: "top 60%", end: "bottom 30%" } });

        gsap.from(".maple3", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.3, delay: 0.7, ease: "power3.inOut", scrub: 2, scrollTrigger: { trigger: ".hero2", scroller: "body", /* markers: true, */ start: "top 60%", end: "bottom 30%" } });

        gsap.from(".text-area1", { height: 0, opacity: 0, duration: 1.3, delay: 0.7, ease: "power3.inOut", scrub: 2, scrollTrigger: { trigger: ".hero3", scroller: "body",  start: "top 60%", end: "bottom 30%" } });

        gsap.from(".chars-realise-h", {
            y: -60, opacity: 0, duration: 2.6, delay: 1, scrub: 2, ease: "power3.out", stagger: 0.03, scrollTrigger: {
                trigger: ".hero3", scroller: "body",
                start: "top 70%", end: "bottom 30%"
            }
        });

        gsap.from(".para-area-model", {
            y: -60, opacity: 0, duration: 2.6, delay: 1, scrub: 2, ease: "power3.out", stagger: 0.03, scrollTrigger: {
                trigger: ".hero3", scroller: "body",
                start: "top 60%", end: "bottom 30%"
            }
        });

        gsap.from(".para-msg-realise", {
            y: -60, opacity: 0, duration: 2, delay: 0.5, scrub: 2, ease: "power3.out", stagger: 0.03, scrollTrigger: {
                trigger: ".hero3", scroller: "body",
                start: "top 60%", end: "bottom 30%"
            }
        });

    })

    return (
        <>
            {/* Main Container */}

            <main className=" main w-full h-full bg-[#fefae0] overflow-x-hidden px-4">



                <SnowflakeCursor2 />
                {/* Navbar */}
                <Navbar />

                <div className="top-heading w-full h-20 p-10 mb-2 mt-10 flex justify-center items-center">
                    <h1 className="cook-title text-8xl font-bold font-[Valent] tracking-widest text-center text-[#ff9770]">
                        {`Something Pending..!`.split("").map((char, idx) => (
                            <span key={idx} className="chars-text inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
                <hr className='bg-[#8fc317] hr-line1 w-[50%] h-[2px] m-auto' />

                {/* Hero Section */}
                <div
                    className="hero1 w-full h-screen mt-3 relative overflow-hidden bg-[#fefae0] border-2 border-[#c08c48] rounded-3xl flex items-center justify-center px-10 md:py-2 gap-4"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674674741074-5dd15b6a0496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fDNkJTIwcmVuZGVycyUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >

                    {/* Decorative Elements */}
                    <div>
                        <div
                            className="maple1 absolute -right-25 -top-10 h-80 w-80 z-100 -rotate-120"
                            style={{
                                backgroundImage: "url('/flowers/maple-leaf1.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        ></div>

                        <div
                            className="maple2 absolute -left-20 -bottom-20 h-80 w-80 z-100"
                            style={{
                                backgroundImage: "url('/flowers/maple-leaf2.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        ></div>
                    </div>

                    {/* Left Side Image (Blender Artwork) */}
                    <div
                        className="hero-left-1 h-[90%] w-[36%] border-2 rounded-3xl bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/madam/Blender_Art.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    ></div>

                    {/* Middle Spacer or Arrow (if any) */}
                    <div className="mid-arrow-cont w-20 h-full"></div>

                    {/* Right Side Text Block */}
                    <div className="hero-right-1 h-[90%] w-[40%] border-2 rounded-3xl">
                        <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10 backdrop-blur-2xl rounded-3xl">

                            {/* Title */}


                            <h1 className="urge font-[Valent] border-b bite-title from-stranger tracking-wide text-center text-6xl font-bold text-[#16425b] bg-clip-text">
                                {` Urge for a 'Simple Smile '`.split("").map((char, idx) => (
                                    <span key={idx} className="chars-text-h inline-block">
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </h1>

                            {/* Memory Paragraph with Mapping */}
                            <p className="model-idea leading-[2.3em] good-para text-black font-mono mt-10 w-full flex flex-wrap">
                                {'Ek din uski WhatsApp DP dekhi 📱, bas wahi moment ko dekhte dekhte socha—kyun na isko 3D model mein banaun? 🖥️🎨 Blender pe kaam karte karte 2-3 baar galti hui, model thoda galat bana, par fir bhi chhod nahi paya. 4 din tak lagatar try karne ke baad finally 5th July ko model ready ho gaya 😊. Socha tha agle din usse dikhane wala hu, par zindagi mein kabhi kabhi kuch aisa ho jata hai jo hum control nahi kar sakte 🌿. Baatcheet ka flow badal gaya… haan, galti shayad meri bhi thi. Supportive rehna zaruri hota hai, par kabhi kabhi uss daayre se thoda zyada kar jaate hain 🌼.'
                                    .split(" ")
                                    .map((word, idx) => (
                                        <span key={idx} className="para-msg1 inline-block mr-1">
                                            {word}
                                        </span>
                                    ))
                                }
                            </p>

                        </div>
                    </div>
                </div>

                {/* Page 2 Area */}

                <div className="hero2 w-full h-screen mt-3 relative overflow-hidden  border-2 border-[#c08c48] rounded-3xl flex items-center justify-center px-10 md:py-2 gap-4"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674674741074-5dd15b6a0496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fDNkJTIwcmVuZGVycyUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>

                    <div className="absolute Spring-flowers2 w-[50%] h-100 bg-cover bg-center z-100 left-0 -top-10" style={{ backgroundImage: "url('/Videos/AnimationFl.gif')" }}></div>

                    <div
                        className="maple3 absolute -right-17 -bottom-10 h-80 w-80 z-70  -rotate-45"
                        style={{
                            backgroundImage: "url('/flowers/simple1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    ></div>


                    <div className="video-area  w-full h-screen flex items-center justify-center  px-4">
                        <VideoShowcase />

                    </div>
                </div>


                {/* Page 3 Area */}

                <div className="hero3 w-full h-screen mt-3 relative overflow-hidden  border-2 border-[#c08c48] rounded-3xl flex items-center justify-center px-10 md:py-2 gap-4"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674674741074-5dd15b6a0496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fDNkJTIwcmVuZGVycyUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>



                    <div className="text-area1 w-[80%] h-[90%] border rounded-3xl backdrop-blur-[0.4em] bg-white/20 pointer-events-none p-10 flex1-1 items-center justify-center">
                        {/* Title */}

                        <h1 className=" font-[Valent]  tracking-widest text-center text-8xl font-bold text-[#16425b] bg-clip-text">
                            {` Realisation'`.split("").map((char, idx) => (
                                <span key={idx} className="chars-realise-h inline-block">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                        <hr className='bg-[#f2bd40] hr-line w-[50%] h-[2px] m-auto mb-10' />

                        <div className=" para-area-model m-auto  w-[90%] h-[70%] px-13 py-5 flex items-center justify-center border rounded-2xl  backdrop-blur-lg  bg-black/10">
                            <p className="realaise leading-[2.3em] good-para text-black font-mono mt-10 w-full flex flex-wrap">
                                {`"Ek baat toh clear ho gayi—apne liye minutes nikalna mushkil lagta hai, lekin jab baat kisi apne ki smile ki ho, toh insaan ghante kya, din bhi nikaal deta hai. 🖌️🌿 Ye 3D model banate waqt bas yehi thought tha—kuch cheezein sirf dekhne ke liye nahi hoti, feel karne ke liye hoti hain. Aaj baat-cheet hoti hai, par pehle jaisa flow nahi raha. Wo raat ko aane wale chhote chhote texts… 'oye paglu, khana khaya?' 🍂 ya woh pinky finger cross karna 🌙🤞—ab bas yaadon mein reh gaya hai. Last text kabhi kabhi fir se padh leta hu—'Radhey Radhey, apna khayal rakhna, Good Night.' 🕊️Ab bhi sab normal hai, bas thoda silence zyada hai. Kahaniyaan waise bhi rukti nahi, bas naye pages likhte rehti hain. ✨📖"`
                                    .split(" ")
                                    .map((word, idx) => (
                                        <span key={idx} className="para-msg-realise inline-block mr-1">
                                            {word}
                                        </span>
                                    ))
                                }
                            </p>
                        </div>
                    </div>



                </div>

            </main >
        </>
    );
}

export default Memories;
