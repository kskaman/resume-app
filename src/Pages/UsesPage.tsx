import InfoCard from "../components/InfoCard";
import { frameworks, languages, libraries, tools } from "../data/usesData";

import SetTitle from "../components/SetTitle";

const UsesPage = () => {
  return (
    <>
      <SetTitle title="Uses | Kaman" />
      <main
        className="w-full my-4 lg:my-6 
          text-zinc-600 dark:text-zinc-100
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
          space-y-16"
      >
        <section id="usesPageHeader" className="max-w-2xl lg:col-span-2">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tools and Technologies I Use
          </h1>
          <p className="mt-12">
            A comprehensive list of frameworks, libraries, and tools that power
            my development process.
          </p>
        </section>

        <section
          id="frameworks"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Frameworks
            </h2>

            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {frameworks.map((framework) => (
                  <li key={framework.key}>
                    <InfoCard
                      title={framework.title}
                      officialLink={framework.officialLink}
                      description={framework.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="libraries"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Libraries
            </h2>

            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {libraries.map((library) => (
                  <li key={library.key}>
                    <InfoCard
                      title={library.title}
                      officialLink={library.officialLink}
                      description={library.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="languages"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Languages
            </h2>

            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {languages.map((language) => (
                  <li key={language.key}>
                    <InfoCard
                      title={language.title}
                      officialLink={language.officialLink}
                      description={language.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Tools
            </h2>

            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {tools.map((tool) => (
                  <li key={tool.key}>
                    <InfoCard
                      title={tool.title}
                      officialLink={tool.officialLink}
                      description={tool.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UsesPage;
