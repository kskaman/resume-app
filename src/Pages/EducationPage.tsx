import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

const EducationPage = () => {
  const formalDegrees = [
    {
      key: 1,
      title: "M.Sc. (Mathematics)",
      subTitle: "Memorial University of Newfoundland",
      duration: "2019 - 2021",
      description: `Specialized in Mathematical Physics with a focus on Quantum
        Entanglement.Completed a thesis- based program that involved
        in-depth research on the complexities of quantum systems and
        their entanglement properties.`,
    },
    {
      key: 2,
      title: "M.S. (Physics)",
      subTitle: "Indian Institute of Science Education and Research (Bhopal)",
      duration: "2017 - 2019",
      description: `Engaged in a thesis-based Master's program, conducting 
        research in Quantum Entanglement. Developed strong
        analytical skills through rigorous academic training.`,
    },
    {
      key: 3,
      title: "B.Sc. (Physics)",
      subTitle: "Guru Nanak Dev University",
      duration: "2014 - 2017",
      description: `Completed a course-based Bachelor's degree in Physics,
        providing a comprehensive foundation in both theoretical
        and practical aspects of the discipline. Engaged in extensive
        coursework and laboratory experiments to build a solid
        understanding of fundamental physics principles.`,
    },
  ];

  const academicResearch = [
    {
      key: 1,
      title: "Creation of Entanglement by Quantum Channels",
      subTitle: "Thesis - M.Sc. Mathematics",
      description: `
          This thesis explores how quantum channels can generate
          entanglement in open quantum systems. The study focuses
          on the immediate effects of quantum channels on entanglement
          production, utilizing mathematical modeling and computational
          simulations to investigate various system configurations
          and channel parameters. 
        `,
    },

    {
      key: 2,
      title: "Quantum Entanglement and GNS Construction",
      subTitle: "Thesis - M.S. Physics",
      description: `
        This research studies an algebraic framework for studying quantum
        entanglement through the Gel'fand-Naimark-Segal (GNS) Construction.
        It specifically examines entanglement in pure states of identical
        particles where the tensor product structure of the Hilbert space
        is not applicable.
      `,
    },
  ];

  return (
    <>
      <Header />
      <main
        className="container w-full my-4 lg:my-6 
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
            text-zinc-800 dark:text-zinc-100 pt-4"
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
            text-zinc-800 dark:text-zinc-100 pt-4"
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
