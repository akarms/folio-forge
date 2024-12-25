'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // `md` breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Show/Hide Navbar on Scroll (Only for md screens)
  useEffect(() => {
    if (!isMediumScreen) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavVisible(false); // Hide navbar on scroll down
      } else {
        setIsNavVisible(true); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMediumScreen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "About", link: "#aboutme", id: 0 },
    { name: "Skills", link: "#skill", id: 1 },
    { name: "Projects", link: "#projects", id: 2 },
    { name: "Education", link: "#education", id: 3 },
    { name: "Contact Me", link: "#contact", id: 4 },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${
          isMediumScreen && !isNavVisible ? "-translate-y-full" : "translate-y-0"
        } md:bg-transparent sticky top-0 z-50 bg-black transform transition-transform duration-300`}
      >
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center md:pt-0"
          ref={menuRef}
        >
          {/* Toggle Button for Mobile */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto p-2 md:rounded-full md:shadow-md md:shadow-[#6c63ff] bg-black rounded-3xl sm:border-solid border-2 border-[#6c63ff] md:border-none`}
            id="navbar-default"
          >
            <ul className="font-medium bg-black flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.1 }}
                  className="transition duration-300"
                  style={{ fontFamily: "Preahvihear Regular" }}
                >
                  <a
                    href={item.link}
                    className={`block text-white rounded md:hover:bg-transparent md:hover:text-[#02f7a6] p-4`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleScroll(item.link);
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>

      {/* Button to Show Navbar (Only for md Screens) */}
      {isMediumScreen && !isNavVisible && (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          className="fixed top-4 left-4 p-3 rounded-full shadow-[#6c63ff] shadow-sm text-white  z-50"
          onClick={() => setIsNavVisible(true)}
        >
         <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
