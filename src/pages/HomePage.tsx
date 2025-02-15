import SocialLinks from "../components/SocialLinks";
import SetTitle from "../components/SetTitle";

import { introHeading, introduction } from "../data/introData";

const HomePage = () => {
  return (
    <>
      <SetTitle title="Home | Kaman" />
      <main
        className="w-full mb-4 lg:mb-6 
        grid grid-cols-1 lg:grid-cols-3 gap-12
        pb-8 lg:pb-16 px-6 sm:px-10 lg:px-14
        text-zinc-600 dark:text-zinc-100"
      >
        <section className="max-w-2xl lg:col-span-2">
          <h1
            className="text-5xl font-bold tracking-tight
              text-zinc-800 dark:text-zinc-100"
            dangerouslySetInnerHTML={{ __html: introHeading }}
          />
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
