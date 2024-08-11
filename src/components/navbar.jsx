import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefaut();
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
    setMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop version */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/50 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-8">
            <div>
              <a href="">
                <img src={logo} alt="logo" width={90} />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((link, index) => (
                  <li key={index}>
                    {" "}
                    <a
                      href={link.href}
                      className="text-white hover:text-yellow-400 text-sm"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="rounded-lg backdrop-blur-md lg:hidden mx-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block w-full text-xl font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
