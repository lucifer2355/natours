import React from "react";

function TourInfoBox({
  pictureClass,
  headingClass,
  cardHeading,
  backSideClass,
  tourInfo = [],
  price,
}) {
  return (
    <div className='col-1-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>
          <div className={`card__picture ${pictureClass}`}>&nbsp;</div>
          <h4 className='card__heading'>
            <span className={`card__heading-span ${headingClass}`}>
              {cardHeading}
            </span>
          </h4>
          <div className='card__details'>
            <ul>
              {tourInfo.map((info) => (
                <li key={info.detail}>{info.detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`card__side card__side--back ${backSideClass}`}>
          <div className='card__cta'>
            <div className='card__price-box'>
              <p className='card__price-only'>Only</p>
              <p className='card__price-value'>${price}</p>
            </div>
            <a href='#' className='btn btn--white'>
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourInfoBox;
