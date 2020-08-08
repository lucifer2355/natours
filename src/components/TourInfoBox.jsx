import React from "react";

function TourInfoBox() {
  return (
    <div className='col-1-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>
          <div className='card__picture card__picture--1'>&nbsp;</div>
          <h4 className='card__heading'>
            <span className='card__heading-span card__heading-span--1'>
              The sea explorer
            </span>
          </h4>
          <div className='card__details'>
            <ul>
              <li>3 day tours</li>
              <li>Up to 30 pepole</li>
              <li>2 tour guides</li>
              <li>Sleep in cozy hotels</li>
              <li>Defficulty: easy</li>
            </ul>
          </div>
        </div>
        <div className='card__side card__side--back card__side--back-1'>
          BACK
        </div>
      </div>
    </div>
  );
}

export default TourInfoBox;
