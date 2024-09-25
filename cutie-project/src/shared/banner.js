import { motion } from "framer-motion";
import { fadeIn } from "../variants";


function Banner({ banner, subHeading, heading, btn1, btn2 }) {
  return (
    <div className="gradientBg rounded-2xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* Banner Image */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner} alt="" className="lg:h-[340px]" />
        </motion.div>
        {/*Banner Content*/}
        <motion.div
          className="md:w-3/5"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-white mb-4 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] ">{subHeading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{btn1}</button>
            <button className="btnPrimary">{btn2}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Banner;
