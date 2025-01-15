import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

interface ProjectCardProps {
  id: string;
  logo: string;
  name: string;
  completed: boolean;
}

const ProjectCard = ({ id, logo, name, completed }: ProjectCardProps) => {
  return (
    <div
      id={`projectCard-${name}`}
      className="w-full h-full group space-y-5 rounded-lg p-4 
                 relative flex flex-col justify-between 
                 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/60"
    >
      {!completed && (
        <div className="absolute top-2 flex flex-row gap-2.5 items-center">
          <span className="relative flex h-3 w-3">
            <span
              className="absolute h-full w-full animate-ping rounded-full opacity-75 bg-teal-400"
              style={{ animationDuration: "1400ms" }}
            ></span>
            <span className="relative h-3 w-3 rounded-full bg-teal-500"></span>
          </span>
          <p className="text-base">In progress</p>
        </div>
      )}
      <div className="p-2 h-16 w-16 rounded-full">
        <img src={logo} alt={`${name}-logo`} className="rounded-full" />
      </div>

      <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {name}
      </h3>

      <div>
        <Link
          to={`/projects/${id}`}
          className="flex items-center text-sm font-medium
            text-zinc-400 transition-colors cursor-pointer
            group-hover:text-teal-500
            dark:text-zinc-500 hover:underline"
        >
          See more details
          <AiOutlineArrowRight className="ml-1 h-3.5 w-3.5 stroke-current" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
