import { useUserContext } from "../../Contexts";
import LiProject from "../LiProject";
import Waves from "../Waves";
import { AiOutlineDoubleRight } from "react-icons/ai";

const ProjectSection = () => {
  const { projects } = useUserContext();

  return (
    <section
      className="bg-[#341660] w-full relative col-center justify-between"
      id="projects"
    >
      <div className="w-full mt-20 mb-32 sm:mb-40 col-center gap-10">
        <h2 className="font-bold text-4xl">Meu Projetos</h2>

        <ul className="flex justify-center flex-wrap w-11/12 max-w-8xl gap-7">
          {projects.map((project, index) => (
            <LiProject key={index} project={project}></LiProject>
          ))}
          <a
            href="https://github.com/AndressaLSMenezes"
            rel="noreferrer"
            target="_blank"
            className=" col-center justify-center w-10/12 pb-10 max-w-xs bg-ocupacity hover:bg-violet-900 rounded-2xl gap-5 text-2xl font-semibold z-20"
          >
            <p>Ver outros projetos</p>
            <AiOutlineDoubleRight />
          </a>
        </ul>
      </div>
      <Waves color="#0F172A" />
    </section>
  );
};

export default ProjectSection;
