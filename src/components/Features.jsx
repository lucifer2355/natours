import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div className='section-feature'>
      <div className='row'>
        <div className='col-1of-4'>
          <div className='feature-box'>
            <FontAwesomeIcon icon={faGlobe} className='feature-box__icon' />
            <h3 className='heading-tertiry'>Explore the world</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
