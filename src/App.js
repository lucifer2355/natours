import React from "react";

import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
      <main>
        <Section />
        <Features />
        <Tours />
        <Stories />
        <BookingSection />
        <Footer />
        <Popup />
      </main>
    </div>
  );
}

export default App;
