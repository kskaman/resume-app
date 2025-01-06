import Home from "./components/Home";

const App = () => {
  return (
    <div
      className="w-full min-h-screen 
      bg-zinc-50 dark:bg-black
      flex justify-center
      xl:px-20 lg:px-14 md:px-10 sm:px-6 px-0"
    >
      <div
        className="w-full 
        bg-white dark:bg-zinc-900
        ring-1 ring-zinc-100 dark:ring-zinc-300/20
        xl:mx-20 lg:mx-14 md:mx-10 sm:mx-6 mx-0"
      >
        <Home />
      </div>
    </div>
  );
};

export default App;
