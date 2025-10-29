
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const EducationCard = () => (
  <motion.div
    variants={fadeIn("up", "spring", 0, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[24px]">
        B.Tech in Computer Science and Engineering
      </h3>
      <p className="text-secondary text-[16px] font-semibold mt-2">
        MIT Academy Of Engineering, Pune
      </p>
      <p className="text-secondary text-[14px] mt-1">
        Aug 2020 – May 2024
      </p>
      <p className="text-white text-[16px] mt-4">
        <span className="text-green-400 font-semibold">CGPA:</span> 8.44/10 (81.18%)
      </p>
      <p className="text-secondary text-[14px] mt-2">
        Pune, Maharashtra, India
      </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />
      
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        <EducationCard />
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");