import InfoCard from "../components/InfoCard";

import { formalDegrees, academicResearch } from "../data/educationData";

const EducationPage = () => {
  return (
    <>
      <main
        className="w-full my-4 lg:my-6 
          text-zinc-600 dark:text-zinc-100
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
          space-y-16"
      >
        <section
          id="formalEducation"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Formal Education
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {formalDegrees.map((degree) => (
                  <li key={degree.key}>
                    <InfoCard
                      title={degree.title}
                      subTitle={degree.subTitle}
                      duration={degree.duration}
                      description={degree.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="academicResearch"
          className="md:border-l 
              md:border-zinc-200 
              md:pl-6 md:dark:border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4">
            <h2
              className="text-base font-semibold 
            text-zinc-800 dark:text-zinc-100 py-4"
            >
              Academic Research
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-12">
                {academicResearch.map((degree) => (
                  <li key={degree.key}>
                    <InfoCard
                      title={degree.title}
                      subTitle={degree.subTitle}
                      description={degree.description}
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

export default EducationPage;
