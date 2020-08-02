import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";

function App() {
  return (
    <div className='app'>
      <Header />
      <Section />
      <Features />
    </div>
  );
}

export default App;
