import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";

const App = () => {
  return (
    <div
      className="w-full min-h-screen 
      bg-zinc-50 dark:bg-black
      flex justify-center
      xl:px-20 lg:px-14 md:px-10 sm:px-6 px-0"
    >
      <div
        className="container w-full 
        bg-white dark:bg-zinc-900
        ring-1 ring-zinc-100 dark:ring-zinc-300/20
        pb-6
        xl:mx-20 lg:mx-14 md:mx-10 sm:mx-6 mx-0"
      >
        <Router basename="/">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDescriptionPage />}
            />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
