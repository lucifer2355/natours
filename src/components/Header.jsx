import React from "react";
import "../sass/header.scss";
import CenterText from "./CenterText";

function Header() {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img
          src='../images/logo-white.png'
          alt='logo'
          className='header__logo'
        />
      </div>

      <CenterText />
    </header>
  );
}

export default Header;
