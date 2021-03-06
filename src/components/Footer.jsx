import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <picture className='footer__logo'>
          <source
            srcSet='./images/logo-green-small-1x.png 1x, ./images/logo-green-small-2x.png 2x'
            media='(max-width: 37.5rem)'
          />
          <img
            srcSet='./images/logo-green-1x.png 1x, ./images/logo-green-2x.png 2x'
            alt='Full Logo'
            src='./images/logo-green-2x.png'
          />
        </picture>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Contact Us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Carrers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Privacy
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            Built by{" "}
            <a href='https://dhruvilgajjar.engineer/' className='footer__link'>
              Dhruvil Gajjar
            </a>{" "}
            for learn{" "}
            <a href='#' className='footer__link'>
              Advance CSS & Sass
            </a>
            . Copyright &copy; by Dhruvil Gajjar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
