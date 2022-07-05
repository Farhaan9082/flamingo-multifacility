import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
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
        <Link href="/">
          <a>
            <div className="w-16 flex items-center justify-center">
              <img src="/logo.webp" alt="logo" />
            </div>
          </a>
        </Link>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              <Link href="/management">
                <a>Management</a>
              </Link>
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="text-sm font-medium tracking-tight px-4 lg:text-base">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/contact">
          <a className="hidden md:block px-8 py-3 text-sm text-white bg-gradient-to-l from-accent-pink to-accent-blue font-medium rounded-full">
            Contact Us
          </a>
        </Link>
      </div>
      <div
        className={`${
          !isOpen ? "hidden" : ""
        } h-screen absolute top-0 left-0 -z-10 bg-white md:hidden w-full px-4`}
      >
        <ul className="mt-20 flex flex-col justify-center items-center">
          <li className="text-lg tracking-tight font-medium py-3">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            <Link href="/management">
              <a>Management</a>
            </Link>
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li className="text-lg tracking-tight font-medium py-3">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li className="mt-6">
            <Link href="/contact">
              <a className="px-8 py-3 text-sm text-white bg-gradient-to-l from-accent-pink to-accent-blue font-medium rounded-full">
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
