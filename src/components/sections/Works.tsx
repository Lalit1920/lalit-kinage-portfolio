import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[360px] h-[520px] flex flex-col">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] flex-1 overflow-hidden">{description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="bg-tertiary py-2 px-4 rounded-lg text-white font-medium hover:bg-[#151030] transition-colors flex items-center gap-2"
              >
                <img src={github} alt="github" className="w-4 h-4" />
                GitHub
              </button>
              <button
                onClick={() => {
                  if (liveLink && liveLink !== "#") {
                    window.open(liveLink, "_blank");
                  } else {
                    alert("Live demo coming soon!");
                  }
                }}
                className="bg-blue-600 py-2 px-4 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                🔗 Live Demo
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
