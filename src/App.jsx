import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Experiences from "./pages/Experiences.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <main className="body flex h-full min-h-screen w-full flex-col items-center justify-start p-8 pt-16 sm:pt-16 text-sm sm:p-16 bg-gradient-to-r from-superdDarkBlue from-20% via-lighterBlue via-65% to-tangerine to-100%">
      <div
        className="transition-all duration-[2000ms] h-full w-fit sm:space-y-15 space-y-10 
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
