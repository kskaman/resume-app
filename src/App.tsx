import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full bg-zinc-50 flex justify-center xl:px-20 lg:px-14 md:px-10 sm:px-6 px-0">
      <div className="w-full bg-white xl:mx-20 lg:mx-14 md:mx-10 sm:mx-6 mx-0">
        <Header />
      </div>
    </div>
  );
};

export default App;
