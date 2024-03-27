"use client"; // for nextjs 13.4 users
import Link from "next/link";
import React, { useState } from "react";



function Navbar() {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {

  setIsMobileMenuOpen(!isMobileMenuOpen);
};

const navLinks = [
  { href: "/", label: "Home" }, // Add info about the sports, Add slider instead of hero section, 
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements"},
  { href: "/announcement", label: "Announcements" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Enroll" },

  
];
// Add about us 
// Achievements 
// Dob, contact, address, aadhar no



  return (
    <nav className=" fixed w-full z-10 top-0 py-3 bg-neutral-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href= "/">
            <img
            
            className="w-24"
            src="/Images/tkd-logo-1.png"
            alt="TKD Logo"
            
            />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

            {navLinks.map(({ href, label }) => (
                <Link
                    
                    key={`${href}${label}`}
                    href={href}
                    className="hover:underline  text-white px-3 py-2 rounded-md text-sm"
                >
                    {label}
                </Link>
                ))}

            
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="text-white bg-neutral-950 inline-flex items-center justify-center p-2 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>

            {
              isMobileMenuOpen ? (
                <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
              ) : (
                <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
  
              )
            }
            
             {/* <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> */}

          

          </button>
        </div>
      </div>
    </div>

    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
      {navLinks.map(({ href, label }) => (
                <Link
                    key={`${href}${label}`}
                    href={href}
                    className="hover:underline text-white block px-3 py-2 rounded-md text-base "
                    onClick={toggleMobileMenu}
                >
                    {label}
                </Link>
                ))}
      </div>
    </div>
  </nav>
  )
}

export default Navbar