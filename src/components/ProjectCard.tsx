import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

interface ProjectCardProps {
  id: string;
  logo: string;
  name: string;
}

const ProjectCard = ({ id, logo, name }: ProjectCardProps) => {
  return (
    <div
      id={`projectCard-${name}`}
      className="group space-y-5 rounded-lg p-4
                 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/60"
    >
      <div className="p-2 h-16 w-16 rounded-full pb-2">
        <img src={logo} alt={`${name}-logo`} />
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
