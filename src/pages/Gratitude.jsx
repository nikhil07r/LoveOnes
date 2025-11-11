import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/others/Navbar";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import SnowflakeCursor from "../components/All Cursors/SnowFlakeCursor";

function Gratitude() {
  gsap.registerPlugin(ScrollTrigger);

  // Your original useGSAP hook for other animations
  useGSAP(() => {
    // Future animations or scroll triggers can go here
  });

  // --- New Game Data Structure ---
  // We use objects to store the name and the image path
  const choices = [
    { name: "Rock", image: "/DeepaMadam/Pngs/Stone.png" },
    { name: "Paper", image: "/DeepaMadam/Pngs/Paper.png" },
    { name: "Scissors", image: "/DeepaMadam/Pngs/Scissor.png" },
  ];
  
  // --- Game State ---
  const [userChoice, setUserChoice] = useState(null); // Will store the {name, image} object
  const [computerChoice, setComputerChoice] = useState(null); // Will store the {name, image} object
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // For animation state

  // --- GSAP Animation Refs ---
  const playerHandRef = useRef(null);
  const computerHandRef = useRef(null);

  // --- GSAP "Shaking" Animation ---
  // This effect runs whenever 'isLoading' becomes true
  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline();
      tl.to([playerHandRef.current, computerHandRef.current], {
        y: -20, // Move up
        duration: 0.15,
        repeat: 5, // Total 6 shakes (1 initial + 5 repeats)
        yoyo: true, // Move back down
        ease: "power1.inOut",
      }).to([playerHandRef.current, computerHandRef.current], {
        y: 0, // Ensure it resets to final position
        duration: 0.1,
      });
    }
  }, [isLoading]);

  // --- Game Logic ---
  const handleChoice = (choice) => {
    if (isLoading) return; // Don't allow new game while animating

    setIsLoading(true);
    setUserChoice(choice);
    setComputerChoice(null); // Clear previous results
    setResult(null);

    // Wait for the animation (1.5s) before showing the result
    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);

      // Determine result
      if (choice.name === randomChoice.name) {
        setResult("It's a Draw 🤝");
      } else if (
        (choice.name === "Rock" && randomChoice.name === "Scissors") ||
        (choice.name === "Paper" && randomChoice.name === "Rock") ||
        (choice.name === "Scissors" && randomChoice.name === "Paper")
      ) {
        setResult("You Win 🎉");
      } else {
        setResult("You Lose 💔");
      }

      setIsLoading(false); // Animation finished
    }, 1500); // 1.5 seconds, matches GSAP animation
  };

  // --- Reset Game ---
  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsLoading(false);
  };

  // --- Helper to render the hand display ---
  const renderHand = (choice, isComputer = false) => {
    const baseClasses =
      "w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-[#e9edc9] rounded-full border-4 border-[#847B1A] shadow-lg overflow-hidden";
    
    // Flip the computer's hand
    const style = isComputer ? { transform: "scaleX(-1)" } : {};

    // 1. During animation, show shaking "Rock" emoji
    if (isLoading) {
      return (
        <div className={baseClasses} style={style}>
          <span className="text-8xl">✊</span>
        </div>
      );
    }
    // 2. After animation, show the chosen image
    if (choice) {
      return (
        <div className={baseClasses} style={style}>
          <img
            src={choice.image}
            alt={choice.name}
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      );
    }
    // 3. Before game starts, show a placeholder
    const placeholderEmoji = isComputer ? "?" : "🤔";
    return (
      <div className={`${baseClasses} bg-opacity-70`} style={style}>
        <span className="text-8xl text-[#847B1A] opacity-50">
          {placeholderEmoji}
        </span>
      </div>
    );
  };

  return (
    <>
      <SnowflakeCursor />
      <div className="h-full w-full bg-[#fefae0] overflow-x-hidden relative px-4">
        <Navbar />

        {/* Game Section */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center pt-28 pb-20">
          <h1 className="text-5xl font-bold text-[#847B1A] mb-10 font-serif text-center">
            Rock Paper Scissors
          </h1>

          {/* --- "Versus" Arena --- */}
          <div className="w-full max-w-4xl flex justify-around items-center mb-6 px-4">
            {/* Player Hand */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#847B1A] mb-4">
                You 🧍‍♂️
              </h2>
              <div ref={playerHandRef}>{renderHand(userChoice, false)}</div>
            </div>

            {/* VS */}
            <span className="text-5xl md:text-7xl font-bold text-gray-500 -mt-16">
              VS
            </span>

            {/* Computer Hand */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#847B1A] mb-4">
                💻 Comp
              </h2>
              <div ref={computerHandRef}>
                {renderHand(computerChoice, true)}
              </div>
            </div>
          </div>

          {/* --- Result Display --- */}
          {/* Fixed height to prevent layout shift during state changes */}
          <div className="h-32 text-center flex flex-col justify-center items-center">
            {isLoading && (
              <h2 className="text-3xl font-semibold text-[#847B1A] animate-pulse">
                Shaking...
              </h2>
            )}
            {result && (
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-[#847B1A] mb-4">
                  {result}
                </h2>
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-[#847B1A] text-white rounded-xl hover:bg-[#b7a838] transition-all duration-300 shadow-md"
                >
                  Play Again 🔁
                </button>
              </div>
            )}
          </div>

          {/* --- Choice Buttons --- */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8">
            {choices.map((choice) => (
              <button
                key={choice.name}
                onClick={() => handleChoice(choice)}
                disabled={isLoading}
                className="flex flex-col items-center justify-center w-36 h-44 md:w-40 md:h-48 bg-[#e9edc9] border-2 border-[#847B1A] rounded-2xl text-2xl font-semibold text-[#847B1A] hover:bg-[#d4a373]/20 transition-all duration-300 shadow-md hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img
                  src={choice.image}
                  alt={choice.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2"
                />
                <span className="text-xl md:text-2xl">{choice.name}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Gratitude;