import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const location = useLocation();
  const navbarRef = useRef(null);

  // Initial animation when route changes (like your existing one)
  useGSAP(() => {
    if (location.pathname === "/") {
      const tl = gsap.timeline();
      tl.from(".navbar", {
        y: -30,
        scaleY: 0.5,
        rotateX: 45,
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, [location.pathname]);

  // Scroll-based hide/show animation
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = navbarRef.current;

      if (!navbar) return;

      // Scroll down → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(navbar, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      // Scroll up → show navbar
      else {
        gsap.to(navbar, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className="navbar w-full h-24  flex justify-between items-center px-8 lg:px-16 font-serif fixed top-0 left-0 z-50 
      bg-white/30 backdrop-blur-xl border-b border-[#b7a838]/30 shadow-sm "
      >
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img
            src="/madam/D logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex gap-6 lg:gap-12 items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/meet-us", label: "Meet Us" },
            { to: "/gallery", label: "Gallery" },
            { to: "/game", label: "Game" },
            { to: "/about", label: "About Deeps" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#847B1A] underline underline-offset-4"
                    : "text-[#3d3d3d] hover:text-[#847B1A]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="line bg-[#847B1A] w-[75%] h-[1px] m-auto"></div>
    </>
  );
}

export default Navbar;
