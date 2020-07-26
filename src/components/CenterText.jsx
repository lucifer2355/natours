import React from "react";

function CenterText() {
  return (
    <div className='header__text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary--main'>Outdoors</span>
        <span className='heading-primary--sub'>is where life happen</span>
      </h1>

      <a href='#' className='btn btn--white btn--animated'>
        Discover our tours
      </a>
    </div>
  );
}

export default CenterText;
