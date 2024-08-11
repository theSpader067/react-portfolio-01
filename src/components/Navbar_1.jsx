import React from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar_1 = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href); // href example: #section1
    if (targetElement) {
      const offset = 85; // typically used to account for fixed headers or other elements that might cover the top of the content when scrolling.
      const elementPosition = targetElement.getBoundingClientRect().top; // returns the distance from the top of the viewport to the top of the targetElement. This gives you the position of the element relative to the current view.
      const offsetPosition = window.scrollY + elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // could also be auto or instant
      });
    }
    setmobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed top-4 z-50 right-0 left-0">
        {/* Desktop nav */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg md:flex">
          <div className="flex w-full px-10 justify-between">
            <div>
              <a href="/">
                <img src={logo} alt="logo" width={90} />
              </a>
            </div>

            <div className="flex items-center">
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-rose-800 text-white"
                      onClick={(e)=>{handleLinkClick(e,link.href)}}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className=" md:hidden backdrop-blur-md">
          <div className=" flex justify-between items-center py-2 px-4">
            <div className="">
              <a href="/">
                <img src={logo} alt="logo" width={90} />
              </a>
            </div>

            <div>
                <a className="hover:cursor-pointer" onClick={()=>setmobileMenuOpen(!mobileMenuOpen)}>
                 {
                    !mobileMenuOpen? <FaBars className="h-6 w-5 m-2 text-white" />:<FaTimes className="h-6 w-5 m-2 text-white"/>
                 }
                </a>
              
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="backdrop-blur-md pb-2">
              <ul className="flex flex-col ml-4 mt-4 backdrop-blur-md gap-4">
                {NAVIGATION_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-semibold text-xl text-white w-full"
                      onClick={(e)=>{handleLinkClick(e,link.href)}}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar_1;
