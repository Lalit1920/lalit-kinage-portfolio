import { SectionWrapper } from "../../hoc";
import { html, css, javascript, typescript, reactjs, nodejs, mongodb, git, docker, github, java, springboot, hibernate, microservices, mysql, postman, aws, figma } from "../../assets";

const skillsData = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springboot },
  { name: "Hibernate", icon: hibernate },
  { name: "Microservices", icon: microservices },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "Postman", icon: postman },
  { name: "GitHub", icon: github },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

const Skills = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Technical
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills.
        </h2>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {skillsData.map((skill) => (
          <div className="flex flex-col items-center" key={skill.name}>
            <div className="h-20 w-20 bg-tertiary rounded-full flex items-center justify-center p-2">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
            </div>
            <p className="text-white text-[14px] font-medium mt-2 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");