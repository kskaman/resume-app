import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="max-w-3xl flex flex-col my-6 gap-12 justify-center py-20 px-6 sm:px-10 lg:px-14 text-zinc-600 dark:text-zinc-100">
        <section>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            I am Kaman, <br />
            Crafting My Journey in Software Development
          </h1>
          <p className="mt-12">
            Hi! I am an aspiring <strong>software developer</strong> passionate
            about exploring the dynamic field of{" "}
            <strong>full-stack development</strong>. I am currently focused on
            building <strong>responsive</strong> and{" "}
            <strong>user-friendly applications</strong> using technologies such
            as <strong>React, TypeScript, Node.js, MongoDB, CSS,</strong> and{" "}
            <strong>Tailwind</strong>. While I am currently more focused on{" "}
            <strong>frontend development</strong>, I am equally interested in{" "}
            <strong>backend development</strong>. With a keen interest in
            solving <strong>real-world problems</strong> through{" "}
            <strong>innovative digital</strong> solutions, I am committed to
            honing my skills and contributing meaningfully to the{" "}
            <strong>tech industry</strong>.
          </p>
        </section>
        <section>
          <div className="flex flex-row gap-2.5 items-center">
            <span className="relative flex h-3 w-3">
              <span
                className="absolute h-full w-full animate-ping rounded-full opacity-75 bg-teal-400"
                style={{ animationDuration: "1400ms" }}
              ></span>
              <span className="relative h-3 w-3 rounded-full bg-teal-500"></span>
            </span>
            <p className="text-md">available for new opportunities</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
