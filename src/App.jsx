import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="body flex h-full min-h-screen w-full flex-col items-center justify-start p-8 pt-16 sm:pt-16 text-sm sm:p-16 bg-gradient-to-r from-superdDarkBlue from-20% via-lighterBlue via-65% to-tangerine to-100%">
      <div className="transition-all duration-[2000ms] h-full w-full sm:space-y-15 max-w-md space-y-10 sm:max-w-md md:max-w-lg lg:max-w-lg">
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  );
}

export default App;
