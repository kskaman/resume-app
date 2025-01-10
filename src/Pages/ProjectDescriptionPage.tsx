import { useParams } from "react-router-dom";

import { projects } from "../data/projectsData";

import SetTitle from "../components/SetTitle";
import { Project } from "../types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineLink } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";

const ProjectDescriptionPage = () => {
  const { projectId } = useParams();
  const project: Project | undefined = projects.find(
    (proj) => proj.id === projectId
  );

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <SetTitle title={`${project.name} | Kaman`} />
      <main
        className="w-full my-4 lg:my-6 
          text-zinc-600 dark:text-zinc-100
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
          space-y-16"
      >
        {/* Project Name */}
        <section>
          <h1 className="text-5xl font-bold">{project.name}</h1>
        </section>

        {/* Tags Section */}
        <section className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              {tag}
            </span>
          ))}
        </section>

        {/* Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview Image */}
            <div>
              <img
                src={project.previewImg}
                alt={`${project.name} preview`}
                className="rounded"
              />
            </div>

            {/* Description Section */}
            <div>
              {project.description.map((item) => (
                <div key={item.key} className="mb-6">
                  <h2 className="text-2xl font-semibold capitalize">
                    {item.key}
                  </h2>
                  {Array.isArray(item.value) ? (
                    <ul className="list-disc list-inside mt-2">
                      {item.value.map((v, index) => (
                        <li key={index}>{v}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            {/* Links */}
            <div className="flex gap-6 flex-col lg:flex-col sm:flex-row">
              <div className="w-full">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex gap-2.5 items-center justify-center
                           bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800
                           dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700
                           text-base text-zinc-100 active:text-zinc-100/70
                           outline-offset-2 rounded-lg px-4 py-2.5
                           hover:underline"
                >
                  <FaExternalLinkAlt size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
              <div className="w-full">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex gap-2.5 items-center justify-center
               bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-100
               dark:bg-zinc-800/50 dark:hover:bg-zinc-800 dark:active:bg-zinc-800/50
               text-base text-zinc-900 active:text-zinc-900/60 
               dark:text-zinc-300 dark:hover:text-zinc-50 dark:active:text-zinc-50/70
               outline-offset-2 rounded-lg px-4 py-2.5
               hover:underline"
                >
                  <MdOutlineLink size={24} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Stack Section */}
            {project.stack && (
              <div
                className="rounded-xl p-6
                border border-zinc-200/60 dark:border-zinc-700/50"
              >
                <div>
                  <div
                    className="text-sm font-semibold 
                  flex flex-row items-center gap-2.5
                  text-zinc-900 dark:text-zinc-100"
                  >
                    <GoStack size={18} />
                    <span>Stack</span>
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                    The technologies used for this project :
                  </p>
                </div>
                <ul className="space-y-1.5 mt-6">
                  {project.stack &&
                    project.stack.map((item) => (
                      <li key={item.key}>
                        <span
                          className="mr-1.5 text-sm font-medium 
                          text-zinc-700 dark:text-zinc-300"
                        >
                          {item.key}
                        </span>
                        <span className="text-sm text-zinc-400 dark-text-zinc-500">
                          {`/ ${item.value}`}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Team Section (if available) */}
            {project.team && (
              <div
                className="rounded-xl p-6
                border border-zinc-200/60 dark:border-zinc-700/50"
              >
                <div>
                  <div
                    className="text-sm font-semibold 
                  flex flex-row items-center gap-2.5
                  text-zinc-900 dark:text-zinc-100"
                  >
                    <FiUserPlus size={18} />
                    <span>Team</span>
                  </div>
                  <p
                    className="mt-1.5 text-sm 
                  text-zinc-600 dark:text-zinc-400"
                  >
                    The Fantastic people I worked with
                  </p>
                </div>
                <ul className="space-y-1.5 mt-6">
                  {project.team.map((item) => (
                    <li key={item.person}>
                      <span
                        className="mr-1.5 text-sm font-medium 
                    text-zinc-700 dark:text-zinc-300"
                      >
                        {item.person}
                      </span>
                      <span className="text-sm text-zinc-400 dark-text-zinc-500">
                        {`/ ${item.role}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectDescriptionPage;
