import React from "react";

import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

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
        <Footer />
      </main>
    </div>
  );
}

export default App;
