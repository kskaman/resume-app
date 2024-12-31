import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="max-w-2xl py-20 px-6 sm:px-10 lg:px-14 text-zinc-800 dark:text-zinc-200">
        <h1 className="my-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          I am Kaman, Crafting My Journey in Software Development
        </h1>
        <p>
          Hi! I am an aspiring software developer passionate about exploring the
          dynamic field of full-stack development. I am currently focused on
          building responsive and user-friendly applications using technologies
          such as React, TypeScript, Node.js, MongoDB, CSS, and Tailwind. With a
          keen interest in solving real-world problems through innovative
          digital solutions, I am committed to honing my skills and contributing
          meaningfully to the tech industry.
        </p>
      </main>
    </>
  );
};

export default Home;
