import React from "react";
import Navbar from "../components/others/Navbar";
import BadamFlake from "../components/All Cursors/BadamFlake";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- IMAGE DATA ---
const galleryImages = [

  { id: 1, video: "DeepaMadam/Gall/Bluedress.mp4", alt: "Bluedress" },
  { id: 2, src: "DeepaMadam/Gall/Cuty1.jpg", alt: "Cuty1" },
  { id: 3, video: "DeepaMadam/Gall/kisswhite.mp4", alt: "kisswhite" },
  { id: 4, src: "DeepaMadam/Gall/Tripblack.jpg", alt: "Tripblack" },
  { id: 5, src: "DeepaMadam/Gall/Cutebaby.jpg", alt: "Cutebaby" },
  { id: 6, video: "DeepaMadam/Gall/Loveyou.mp4", alt: "Loveyou" },
  { id: 7, src: "DeepaMadam/Gall/Greentshirt.jpg", alt: "Greentshirt" },
  { id: 8, video: "DeepaMadam/Gall/purpleswater.mp4", alt: "purpleswater" },
  { id: 9, src: "DeepaMadam/Gall/blackdres.jpg", alt: "blackdres" },
  { id: 10, src: "DeepaMadam/Gall/Together1.jpg", alt: "Together" },
  { id: 11, video: "DeepaMadam/Gall/song.mp4", alt: "song" },
  { id: 12, src: "DeepaMadam/Gall/Bluesaare.jpg", alt: "Bluesaare" },
  { id: 13, src: "DeepaMadam/Gall/beautybone.jpg", alt: "beautybone" },
  { id: 14, video: "DeepaMadam/Gall/Lightcolor.mp4", alt: "Lightcolor" },
  { id: 15, src: "DeepaMadam/Gall/bhuut.jpg", alt: "bhuut" },
  { id: 16, video: "DeepaMadam/Gall/greenkiss.mp4", alt: "greenkiss" },
  { id: 17, src: "DeepaMadam/Gall/diwali.jpg", alt: "diwali" },
  { id: 18, src: "DeepaMadam/Gall/sleepy.jpg", alt: "sleepy" },
  { id: 19, video: "DeepaMadam/Gall/Hum😝.mp4", alt: "Hum😝" },
  { id: 20, src: "DeepaMadam/Gall/Pinktshirt.jpg", alt: "Pinktshirt" },
  { id: 21, src: "DeepaMadam/Gall/Heartz.jpg", alt: "Heartz" },
  { id: 22, src: "DeepaMadam/Gall/shortback.jpg", alt: "shortback" },
  { id: 23, video: "DeepaMadam/Gall/blabla.mp4", alt: "blabla" },
  { id: 24, src: "DeepaMadam/Gall/saarepink.jpg", alt: "saarepink" },
  { id: 25, src: "DeepaMadam/Gall/coldcoffee.jpg", alt: "coldcoffee" },
  { id: 26, src: "DeepaMadam/Gall/PookieMam.jpg", alt: "PookieMam" },
  { id: 27, src: "DeepaMadam/Gall/Main.jpg", alt: "Main" },
  { id: 28, video: "DeepaMadam/Gall/shotdress2.mp4", alt: "shotdress2" },
  { id: 29, src: "DeepaMadam/Gall/lightbrowndress.jpg", alt: "lightbrowndress" },
  { id: 30, src: "DeepaMadam/Gall/babyhand.jpg", alt: "babyhand" },
  { id: 31, video: "DeepaMadam/Gall/singingsong.mp4", alt: "singingsong" },
  { id: 32, src: "DeepaMadam/Gall/blackdress3.jpg", alt: "blackdress3" },
  { id: 33, src: "DeepaMadam/Gall/Withdog.jpg", alt: "Withdog" },
  { id: 34, src: "DeepaMadam/Gall/BlackDress.jpg", alt: "Black Dress" },
  { id: 35, src: "DeepaMadam/Gall/cutesleeping.jpg", alt: "cutesleeping" },
  { id: 36, src: "DeepaMadam/Gall/HowLook.jpg", alt: "HowLook" },
  { id: 37, src: "DeepaMadam/Gall/Cuty3.jpg", alt: "Cuty3" },
  { id: 38, src: "DeepaMadam/Gall/Readybindi.jpg", alt: "Readybindi" },
  { id: 39, video: "DeepaMadam/Gall/Shotdress.mp4", alt: "Shotdress" },
  { id: 40, src: "DeepaMadam/Gall/BlueTop.jpg", alt: "Blue Top" },
  { id: 41, video: "DeepaMadam/Gall/Kiss😁.mp4", alt: "Kiss😁" },
  { id: 42, src: "DeepaMadam/Gall/puppyfilter.jpg", alt: "puppyfilter" },
  { id: 43, src: "DeepaMadam/Gall/blueTop2.jpg", alt: "blueTop2" },
  { id: 44, src: "DeepaMadam/Gall/chickkiss.jpg", alt: "chickkiss" },
  { id: 45, src: "DeepaMadam/Gall/Birthday.jpg", alt: "Birthday" },
  { id: 46, src: "DeepaMadam/Gall/Laxmijhula.jpg", alt: "Laxmijhula" },
  { id: 47, src: "DeepaMadam/Gall/Cuty2.jpg", alt: "Cuty2" },
  { id: 48, src: "DeepaMadam/Gall/cute.jpg", alt: "cute" },
  { id: 49, video: "DeepaMadam/Gall/Bluedressvdo.mp4", alt: "Bluedressvdo" },
  { id: 50, src: "DeepaMadam/Gall/Tripblack.jpg", alt: "Tripblack" }



];

function Gallery() {
  useGSAP(() => {
    gsap.from(".page4 .grid-item", {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".page4",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <BadamFlake />
      <div className="w-full min-h-screen bg-[#fefae0] overflow-x-hidden px-4">
        <Navbar />

        {/* --- PAGE 4 - Masonry Grid --- */}
        <div className="page4 w-full min-h-screen py-20 px-4 md:px-10 mt-10">
          {/* Grid Title */}
          <div className="w-full flex flex-col justify-center items-center mb-16">
            <h2 className="text-6xl font-bold font-[RollingBeat] text-center text-[#f48c06]">
              Collection
            </h2>
            <img
              src="/Lines/LineCom 2.png"
              width={1000}
              alt="Divider"
              className="mt-1 w-[80%] max-w-lg"
              loading="lazy"
            />
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="grid-item break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-lg"
              >
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
