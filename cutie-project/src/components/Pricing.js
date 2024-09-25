import { useState } from "react";
import greenCircle from "../assets/greenCircle.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Afaucibus accumsan sociosqu tellus tortor tempus ad nisi gravida",
    },
    {
      name: "Advanced",
      monthlyPrice: 49,
      yearlyPrice: 299,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Afaucibus accumsan sociosqu tellus tortor tempus ad nisi gravida",
    },
    {
      name: "Premium",
      monthlyPrice: 89,
      yearlyPrice: 499,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Afaucibus accumsan sociosqu tellus tortor tempus ad nisi gravida",
    },
  ];

  return (
    <div className="md:px-12 p-4 max-w-s mx-auto py-8" id="pricing">
      <div className="text-center">
        <h2 className="md:text-4xl text-2xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          You can choose your preferred course acoording to your knowledge about
          cooking Korean meals. You can contact us in order to ask any question!
        </p>
        {/* toggle pricing  */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-[#ffd0a2] rounded-full transition duration-300 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-[#898989] ml-8" : "bg-[#f77e0d]"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      {/* pricing card */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-16 md:w-11/12 mx-auto"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-6 md:px-4 px-2 rounded-lg shadow-3xl"
          >
            <h3 className="text-2xl font-bold text-center text-primary ">
              {pkg.name}
            </h3>
            <p className="text-primary text-center my-2">{pkg.description}</p>
            <p className="mt-3 text-center text-[#fba93deb] text-3xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary font-medium ">
                {isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-3 space-y-1 px-2 ">
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Hands-On Practice
              </li>
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Knife skills and food preparation techniques
              </li>
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Guest lectures from professional industries
              </li>
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Proper handling, storage, and sanitation techniques
              </li>
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Peer feedback sessions to improve skills
              </li>
              <li className="flex gap-3 items-center">
                <img src={greenCircle} alt="" className="w-4 h-4" />
                Competitions or challenges to encourage creativity
              </li>
            </ul>
            <div className="w-full mx-auto mt-5 flex items-center justify-center">
              <button className="btnPrimary">Start this course</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Pricing;
