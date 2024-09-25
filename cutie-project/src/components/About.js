import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
    return (
      <div
        className="md:px-14 p-8 max-w-s mx-auto space-y-10 my-10 lg:mx-[180px]"
        id="about"
      >
        {/* about part 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg2} alt="about" className="h-[340px]" />
          </motion.div>
          {/* content of about */}
          <motion.div
            className="md:w-2/5"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal">
              You can start learning to cook like a professional chef
              <span className="text-secondary"> with Seoul Bites</span>.
            </h2>

            <p className="text-tartiary text-lg mb-7 ">
              But we’re not just about great food; we’re also passionate about
              sharing our culinary expertise! At Seoul Bites, we offer
              professional cooking courses designed for aspiring chefs and food
              enthusiasts alike. Whether you're a beginner or looking to refine
              your skills, our courses provide the perfect opportunity to
              elevate your cooking game while enjoying a taste of Korea.
            </p>
            <button className="btnPrimary">Start Learning</button>
          </motion.div>
        </div>

        {/* about part 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg1} alt="about" className="h-[320px]" />
          </motion.div>
          {/* content of about */}
          <motion.div
            className="md:w-2/5"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal">
              We have been using cretivity in our food
              <span className="text-secondary"> for many years</span>.
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Join us for an unforgettable dining experience where you can
              indulge in delicious fast food without compromising on quality.
              Our inviting atmosphere is perfect for casual meals, celebrations,
              or even a cozy date night. Plus, don’t forget to check out our
              daily specials and seasonal offerings that showcase the best of
              Korean flavors.
            </p>
            <button className="btnPrimary">Start Ordering</button>
          </motion.div>
        </div>
      </div>
    );
}


export default About;