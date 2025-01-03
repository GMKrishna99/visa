import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Aos from "aos"; // Importing AOS for scroll animations
import "aos/dist/aos.css"; // Import the AOS styles

const Banner = ({ imageSrc, title, subtitle, linkText, linkHref }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="flex items-center justify-center"
        data-aos="fade-up" // Image fades in with a slight delay
        data-aos-delay="200" // Adds a delay to the image animation
      >
        <img
          src={imageSrc}
          alt="home_banner"
          className="w-full h-auto object-cover" // Ensures the image is responsive
        />
      </div>

      {/* Overlay with title, subtitle, and link */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 sm:px-6 md:px-8 w-full md:w-3/4 lg:w-full ">
        {/* Title with AOS animation */}
        <h1
          className="text-2xl -mt-1 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold my-3 leading-tight lg:w-1/2 mx-auto"
          data-aos="fade-up" // Text fades in after the image
          data-aos-delay="400" // Delay to make the text appear after the image
        >
          {title}
        </h1>

        {/* Subtitle with AOS animation */}
        <p
          className="text-sm sm:text-md md:text-lg lg:text-xl text-banner_subtext_color text-center w-full lg:w-1/2 mx-auto"
          data-aos="fade-up" // Subtitle fades up
          data-aos-delay="600" // Delay to make subtitle appear after title
        >
          {subtitle}
        </p>

        {/* Conditionally render the anchor link if linkText and linkHref are provided */}
        {linkText && linkHref && (
          <div className="md:mt-3 mt-0 text-center">
            <a
              href={linkHref}
              className="bg-primary_color hover:bg-primary_color/90 transition-all duration-500 ease-in-out text-white py-1.5 px-4 md:py-3 rounded-full mx-auto flex justify-center items-center font-medium w-max"
              data-aos="fade-up" // Button fades up as well
              data-aos-delay="600"
            >
              {linkText}
              <div className="bg-white h-6 w-6 md:h-6 md:w-6 flex items-center justify-center rounded-full ml-2">
                <FaChevronRight className="text-primary_color text-sm md:text-base" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
