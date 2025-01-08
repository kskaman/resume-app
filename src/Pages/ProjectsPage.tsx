import SetTitle from "../components/SetTitle";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <>
      <SetTitle title="Projects | Kaman" />

      <main
        className="w-full my-4 lg:my-6 
          text-zinc-600 dark:text-zinc-100
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
          space-y-16"
      >
        <section id="usesPageHeader" className="max-w-2xl lg:col-span-2">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            My Development Projects
          </h1>
          <p className="mt-12">
            From simple calculators to a personal finance app, each project
            sharpens my skills and readiness for a professional web development
            role.
          </p>
        </section>

        <section id="projectSection">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li>
                <ProjectCard logo={project.icon} name={project.name} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
