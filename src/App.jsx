import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Projects />
        <Experiences />
      </main>
    </>
  );
}

export default App;
