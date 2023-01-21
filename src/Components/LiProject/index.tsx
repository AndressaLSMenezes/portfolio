import { IProject } from "../../Interfaces";

interface IProps {
  project: IProject;
}

const LiProject = ({ project }: IProps) => {
  const { name, stack, image, about, techs } = project;

  return (
    <li className=" col-center w-10/12 pb-10 max-w-xs bg-ocupacity rounded-2xl gap-5">
      <figure className="overflow-hidden w-full h-40 rounded-t-2xl flex items-start justify-center">
        <img src={image} alt={name} className="w-full"/>
      </figure>
      <div className="w-11/12 col-left gap-3">
        <h3 className=" text-xl font-semibold text-slate-100">{name}</h3>
        <p className={"text-base rounded-md w-20 text-center font-semibold " + (stack.toLowerCase() === "frontend" ? "bg-green-700" : "bg-red-700")}>
          {stack}
        </p>

        <div className=" text-sm font-medium flex gap-2 flex-wrap">
          {techs.map((tech) => (
            <p className="bg-brand px-2 py-1 rounded-md">{tech}</p>
          ))}
        </div>
        <p className="text-ellipsis">{about}</p>
      </div>
    </li>
  );
};
export default LiProject;
