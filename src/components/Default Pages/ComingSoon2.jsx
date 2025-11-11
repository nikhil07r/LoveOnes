import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

function ComingSoon2() {
        useGSAP(()=>{
    const tl = gsap.timeline()
        tl.from(".chars-text", {
        y: 60, // from below
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
    });
    })
  return (
    <>
        <div className="w-full h-[80%] flex justify-center items-center relative">
                   <h1 className="Kami-pdna text-[4em] font-mono font-bold absolute z-[20] top-[40%] left-[25%] text-[#847B1A]">
              {"Memories to Bnti Rhengi Aage.!".split("").map((char, idx) => (
                <span key={idx} className="chars-text inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>


    </div>
    </>
  )
}

export default ComingSoon2