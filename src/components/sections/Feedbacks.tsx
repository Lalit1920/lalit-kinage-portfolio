import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials, publications } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const CertificationCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
}) => {
  const isMicrosoft = testimonial.includes("Microsoft");
  const isOracle = testimonial.includes("Oracle");
  
  const getCertificationLink = () => {
    if (isMicrosoft) {
      return "https://www.credly.com/badges/4f8d9978-b80e-4fe5-a988-1b56599758b8/public_url";
    }
    if (isOracle) {
      return "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B5C9EEC92889BFD95D7D130893D3BA6AAA1BB614C5F4928F287181BE25EF34F4";
    }
    return "#";
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
    >
      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white text-center">{testimonial}</p>
        <div className="mt-6 text-center">
          <a
            href={getCertificationLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-3 px-6 rounded-xl text-white font-bold hover:bg-[#151030] transition-colors inline-block"
          >
            View Certification
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const PublicationCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white text-center">{testimonial}</p>
      <div className="mt-6 text-center">
        <a
          href="https://ieeexplore.ieee.org/document/10533521"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary py-3 px-6 rounded-xl text-white font-bold hover:bg-[#151030] transition-colors inline-block"
        >
          View Publication
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div>
      {/* Certifications Section */}
      <div className="bg-black-100 mt-12 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
        >
          <Header useMotion={true} {...config.sections.feedbacks} />
        </div>
        <div
          className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 justify-center`}
        >
          {testimonials.map((testimonial, index) => (
            <CertificationCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Publications Section */}
      <div className="bg-black-100 mt-12 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
        >
          <Header useMotion={true} {...config.sections.publications} />
        </div>
        <div
          className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 justify-center`}
        >
          {publications.map((publication, index) => (
            <PublicationCard key={index} index={index} {...publication} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
