import css from "../../Assets/images/css3.svg";
import git from "../../Assets/images/git.svg";
import github from "../../Assets/images/github.svg";
import html5 from "../../Assets/images/html5.svg";
import js from "../../Assets/images/js.svg";
import nodeJs from "../../Assets/images/nodejs.svg";
import postgreSql from "../../Assets/images/postgresql.svg";
import reactIcon from "../../Assets/images/react.svg";
import typeScript from "../../Assets/images/typescript.svg";
import tailwind from "../../Assets/images/tailwind.svg";
import python from "../../Assets/images/python.svg";
import Waves from "../Waves";

const SecondSection = () => {
  return (
    <section
      className="col-center justify-between bg-brand w-full min-h-screen"
      id="technology"
    >
      <div className="col-center justify-center gap-10 w-full relative h-5/6">
        <h2 className="text-3xl font-bold">Tecnologias Que Eu Sei</h2>

        <figure className="flex flex-wrap justify-center gap-4 mb-24">
          <img src={git} alt="Logo Git" className="logo" />
          <img src={github} alt="Logo github" className="logo" />
          <img src={html5} alt="Logo html5" className="logo" />
          <img src={css} alt="Logo Css3" className="logo" />
          <img src={js} alt="Logo JavaScript" className="logo" />
          <img src={nodeJs} alt="Logo NodeJS" className="logo" />
          <img src={postgreSql} alt="Logo PostgreSQL" className="logo" />
          <img src={reactIcon} alt="Logo React" className="logo" />
          <img src={typeScript} alt="Logo Typescript" className="logo" />
          <img src={tailwind} alt="Logo Tailwind" className="logo" />
          <img src={python} alt="Logo Tailwind" className="logo" />
        </figure>
      </div>

      <Waves color="#341660" />
    </section>
  );
};

export default SecondSection;
