import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Experiences from "./pages/Experiences.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <main className="body min-h-screen w-full flex flex-col items-center justify-start p-4 sm:p-8 md:p-16 pt-12 sm:pt-16 text-sm bg-gradient-to-r from-superdDarkBlue from-20% via-lighterBlue via-65% to-tangerine to-100%">
      <div
        className="transition-all duration-[2000ms] h-full w-fit max-w-[95%] space-y-6 sm:space-y-10 md:space-y-15 
        sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
