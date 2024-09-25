import featuresImg from "../assets/features.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import feature3 from "../assets/feature3.png";
import feature2 from "../assets/feature2.png"
    
function Features() {
    return (
      <div className="my-24 md:px-12 px-3 max-w-screen-xl mx-auto" id="feature">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
            className="lg:w-1/4"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="text-2xl text-primary font-bold lg:w-1/2 mb-3">
              Why are we better than others?
            </h3>
            <p className="text-base text-tartiary">
              Our inviting atmosphere makes Seoul Bites the perfect spot for
              friends and family to gather. With cozy seating and vibrant decor
              inspired by Korean culture, every visit feels like a mini getaway.
              Plus, our friendly staff is always ready to recommend dishes and
              ensure that your dining experience is nothing short of
              exceptional.
            </p>
          </motion.div>
          {/* Features Cards */}
          <motion.div
            className="w-full lg:w-3/4"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start lg:gap-8 gap-10">
              <div className="bg-[#ffc77deb] rounded-[35px] h-[320px] w-[234px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-5 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={feature3} alt="" className="h-[180px] ml-[35px]" />
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">
                    Friendly and professional staff
                  </h5>
                </div>
              </div>
              <div className="bg-[#ffc77deb] rounded-[35px] h-[320px] w-[234px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-5 transition-all duration-300 cursor-pointer md:mt-16">
                <div>
                  <img src={featuresImg} alt="" className="h-[180px]" />
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">
                    Creativity in Flavors
                  </h5>
                </div>
              </div>
              <div className="bg-[#ffc77deb] rounded-[35px] h-[320px] w-[234px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-5 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={feature2} alt="" className="w-[180px]" />
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">
                    Convenient Atmosphere
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
}
export default Features;