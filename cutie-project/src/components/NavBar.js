import { useState } from "react";
import logo from "../assets/logo.jpg";
import { GrLanguage } from "react-icons/gr";
import { FaXmark,FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md-px-12 p-2 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-3 items-center">
            <a
              href="/"
              className="text-xl font-semibold flex items-center space-x-3 text-primary"
            >
              <div className="akaya-telivigala-regular mr-10">
                <img
                  src={logo}
                  alt=""
                  className="w-20 rounded-2xl inline-block items-center"
                />
                SeoulBites
              </div>
            </a>
            {/* showing nav item using map */}
            <ul className="md:flex space-x-8 hidden ml-6">
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  activeClass="active"
                  spy="true"
                  smooth={true}
                  offset={-100}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* language and sign up */}
          <div className="space-x-8 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Languge</span>
            </a>
            <button className="bg-secondary py-2 px-3 transition-all duration-300 rounded hover:text-white hover:bg-orange-400 m-0">
              Sign Up
            </button>
          </div>
          {/* menu button, only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" text-lg />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-32 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "fixed block right-0 top-0 left-0 " : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            className="block hover:text-gray-300 text-white"
            activeClass="active"
            spy="true"
            smooth={true}
            offset={-80}
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
export default NavBar;
