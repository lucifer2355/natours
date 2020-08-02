import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Section />
        <Features />
      </main>
    </div>
  );
}

export default App;
