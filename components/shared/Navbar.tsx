import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-3 border-b border-gray-300 md:py-4 lg:py-5 z-10">
      <div className="container flex justify-between items-center">
        <div className="w-16 flex items-center justify-center">
          <img src="/logo.webp" alt="logo" />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              Home
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              About
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              Management
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              Values
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              Objectives
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="hidden md:block px-8 py-3 text-sm text-white bg-gradient-to-l from-accent-pink to-accent-blue font-medium rounded-full"
        >
          Contact Us
        </button>
      </div>
      <div
        className={`${
          !isOpen ? "hidden" : ""
        } h-screen absolute top-0 left-0 -z-10 bg-white md:hidden w-full px-4`}
      >
        <ul className="mt-20 flex flex-col justify-center items-center">
          <li className="text-lg tracking-tight font-medium py-3">Home</li>
          <li className="text-lg tracking-tight font-medium py-3">About Us</li>
          <li className="text-lg tracking-tight font-medium py-3">
            Management
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            Our Values
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            Our Objectives
          </li>
          <button
            type="button"
            className="px-8 py-3 mt-6 text-sm text-white bg-gradient-to-l from-accent-pink to-accent-blue font-medium rounded-full"
          >
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
