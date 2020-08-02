import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureBox({ icon, title, description }) {
  return (
    <div className='col-1-of-4'>
      <div className='feature-box'>
        <FontAwesomeIcon icon={icon} className='feature-box__icon' />
        <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
        <p className='feature-box__text'>{description}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
