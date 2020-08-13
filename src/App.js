import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import BookingSection from "./components/BookingSection";

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Section />
        <Features />
        <Tours />
        <Stories />
        <BookingSection />
      </main>
    </div>
  );
}

export default App;
