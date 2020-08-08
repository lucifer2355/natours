import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";
import Tours from "./components/Tours";

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Section />
        <Features />
        <Tours />
      </main>
    </div>
  );
}

export default App;
