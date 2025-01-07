import SocialLinks from "../components/SocialLinks";

const HomePage = () => {
  const introduction = `
  Hi! I am an aspiring <strong>software developer</strong> passionate about exploring
  the dynamic field of full-stack development. I am currently focused on building
  responsive and user-friendly applications using technologies such as <strong>React,
  TypeScript, Node.js, MongoDB, CSS,</strong> and <strong>Tailwind</strong>. While I am
  currently more focused on frontend development, I am equally interested in backend
  development. With a keen interest in solving real-world problems through innovative
  digital solutions, I am committed to honing my skills and contributing meaningfully
  to the tech industry.
`;

  return (
    <>
      <main
        className="w-full mb-4 lg:mb-6 
        grid grid-cols-1 lg:grid-cols-3 gap-12
        pb-8 lg:pb-16 px-6 sm:px-10 lg:px-14
        text-zinc-600 dark:text-zinc-100"
      >
        <section className="max-w-2xl lg:col-span-2">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            I am Kaman, <br />
            Crafting My Journey in Software Development
          </h1>
          <p
            className="mt-12"
            dangerouslySetInnerHTML={{ __html: introduction }}
          />
        </section>
        <section className="max-w-2xl lg:col-span-2">
          <div className="flex flex-row gap-2.5 items-center">
            <span className="relative flex h-3 w-3">
              <span
                className="absolute h-full w-full animate-ping rounded-full opacity-75 bg-teal-400"
                style={{ animationDuration: "1400ms" }}
              ></span>
              <span className="relative h-3 w-3 rounded-full bg-teal-500"></span>
            </span>
            <p className="text-base">available for new opportunities</p>
          </div>
        </section>
        <section className="lg:col-span-1 lg:col-start-3 lg:row-start-1">
          <SocialLinks />
        </section>
      </main>
    </>
  );
};

export default HomePage;
