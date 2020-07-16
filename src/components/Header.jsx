import React from "react";
import "../styles/header.css";
import CenterText from "./CenterText";

function Header() {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src='../images/logo-white.png' alt='logo' className='logo' />
      </div>

      <CenterText />
    </header>
  );
}

export default Header;
