import { AiOutlineArrowRight } from "react-icons/ai";

interface ProjectCardProps {
  logo: string;
  name: string;
}

const ProjectCard = ({ logo, name }: ProjectCardProps) => {
  return (
    <div
      id={`projectCard-${name}`}
      className="group space-y-2 rounded-xl p-4
                 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/60"
    >
      <div>{logo}</div>

      <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {name}
      </h3>

      <div>
        <a
          className="
            flex items-center text-sm font-medium
            text-zinc-400 transition-colors cursor-pointer
            group-hover:text-teal-500
            dark:text-zinc-500 hover:underline
          "
        >
          See more details
          <AiOutlineArrowRight className="ml-1 h-3.5 w-3.5 stroke-current" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
