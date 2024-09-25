import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";
import logo from "../assets/logo.jpg";
import { FaTelegram } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-[#362d2d] px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-white"
          >
            <img
              src={logo}
              alt=""
              className="w-20 rounded-2xl inline-block items-center"
            />
            <span className="akaya-telivigala-regular text-white">
              SeoulBites
            </span>
          </a>
          <p className="md:w-1/2 text-tartiary">
            Come visit us at Seoul Bites, where every meal is an adventure, and
            every class is a step toward culinary mastery. Discover the perfect
            fusion of fast food and authentic Korean flavors, and let us inspire
            your cooking journey today!
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className=" py-2 px-4 rounded-md focus:outline-none text-black"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 hover:bg-orange-400 hover:text-white duration-300 transition-all"
            />
          </div>
        </div>
        {/* footer navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-around gap-10 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="text-tartiary space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="text-tartiary space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask questions?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to pay?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="text-tartiary space-y-3">
              <p className=" hover:text-gray-300">
                Address: 123 Kimchi Lane, Seoul, South Korea, 45678{" "}
              </p>
              <p className="hover:text-gray-300">
                Phone Number: (555) 012-3456{" "}
              </p>
              <p className="hover:text-gray-300">
                Email: info@seoulbitesrestaurant.com
              </p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="text-tartiary flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@2024 - All rights deserved.</p>
        <div className="text-2xl flex items-center space-x-5">
          <FaInstagram className="cursor-pointer hover:-translate-y-4 transition-all duration-500" />
          <FaTelegram className="cursor-pointer hover:-translate-y-4 transition-all duration-500" />
          <FaGithub className="cursor-pointer hover:-translate-y-4 transition-all duration-500" />
          <FaLinkedin className="cursor-pointer hover:-translate-y-4 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
