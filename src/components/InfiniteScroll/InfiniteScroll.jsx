import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = true,            // ✅ autoplay enabled by default
  autoplaySpeed = 0.3,        // ✅ tweak scroll speed here
  autoplayDirection = "down",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  // 🌀 Tilted transform effect
  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  // 🌸 Intro Animation using GSAP
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".Spring-flowers2", {
      x: -10,
      opacity: 0,
      duration: 1.5,
      delay: 0.1,
      ease: "expo.inOut",
    });

    tl.from(".list-elems", {
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
    });
  });

  // 🔁 Infinite Scroll + Manual Scroll Logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    // Set initial positions
    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    let isUserInteracting = false;
    let rafId;

    const directionFactor = autoplayDirection === "down" ? 1 : -1;
    const speedPerFrame = autoplaySpeed * directionFactor;

    // 🔁 Continuous autoplay
    const tick = () => {
      if (!isUserInteracting && autoplay) {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // 🧭 Manual scroll (wheel + drag)
    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
        isUserInteracting = true;
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
        setTimeout(() => (isUserInteracting = false), 1200);
      },
      onChange: ({ deltaY, isDragging, event }) => {
        isUserInteracting = true;
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;

        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.6,
            ease: "power2.out",
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    // 🛑 Pause on hover (optional)
    if (pauseOnHover) {
      container.addEventListener("mouseenter", () => (isUserInteracting = true));
      container.addEventListener("mouseleave", () => (isUserInteracting = false));
    }

    return () => {
      observer.kill();
      cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-t-2 border-b-2 border-t-dotted border-b-dotted border-transparent bg-gradient-to-tr from-pink-200 via-orange-200 to-[#fefae0]"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      {/* 🌸 Background animation layer */}
      <div
        className="Spring-flowers2 absolute left-0 top-[-25%] w-[50%] h-100 bg-cover bg-center"
        style={{ backgroundImage: "url('/Videos/AnimationFl.gif')" }}
      ></div>

      {/* Fading gradient edges */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-pink-100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 z-10 shadow-lg pointer-events-none"></div>

      {/* 🧱 Scrollable list */}
      <div
        className="flex flex-col overscroll-contain px-4 cursor-grab origin-center list-elems"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center border-2 border-zinc-700 rounded-[15px] select-none box-border relative bg-white/60 backdrop-blur-sm"
            key={i}
            style={{
              height: `${itemMinHeight}px`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
