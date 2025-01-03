import React, { useEffect } from "react";
import { FooterLinks } from "../constants/FooterLinks";
import FooterLogo from "../assets/logo.png";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Footer = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="text-[#0656A2] bg-white">
      {/* Top Section */}
      <div className="container mx-auto flex flex-wrap items-start space-y-8 lg:space-y-0 lg:space-x-20 py-8 px-4">
        {/* Logo */}
        <div
          className="w-full lg:w-auto flex justify-center lg:justify-start"
          data-aos="fade-up"
        >
          <img src={FooterLogo} alt="footer_logo" className="w-[250px]" />
        </div>

        {/* Footer Links */}
        <div
          className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {FooterLinks.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch justify-start"
            >
              <div>
                {/* Section Title with Underline */}
                <h3 className="text-lg font-semibold mb-3 pb-1">
                  {section.title}
                </h3>
              </div>
              <ul>
                {section.footLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="mb-2"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <a
                      href={link.href}
                      className="text-sm font-medium text-gray-400 hover:text-[#0656A2] transition-all duration-300 ease-in-out"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto" data-aos="fade-up">
        <div className="text-white bg-slate-950 p-4 text-gray-700 text-base flex flex-wrap items-center justify-between px-4 ">
          <span className="w-full lg:w-auto text-center lg:text-left ">
            © 2023 Flairsvisa All Rights Reserved.
          </span>
          <div className="w-full lg:w-auto text-center lg:text-right mt-2 lg:mt-0">
            <a href="#" className="hover:text-primary_color mx-2">
              Disclaimer
            </a>
            |
            <a href="#" className="hover:text-primary_color mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:text-primary_color mx-2">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
