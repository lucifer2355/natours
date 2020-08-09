import React from "react";

import TourInfoBox from "./TourInfoBox";
import { TOURINFO1, TOURINFO2, TOURINFO3 } from "../data/tourInformatin";

const tourInfo1 = TOURINFO1;
const tourInfo2 = TOURINFO2;
const tourInfo3 = TOURINFO3;

function Tours() {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most popular tours</h2>
      </div>

      <div className='row'>
        <TourInfoBox
          pictureClass='card__picture--1'
          headingClass='card__heading-span--1'
          cardHeading='The sea explorer'
          backSideClass='card__side--back-1'
          tourInfo={tourInfo1}
          price={299}
        />
        <TourInfoBox
          pictureClass='card__picture--2'
          headingClass='card__heading-span--2'
          cardHeading='The forest hiker'
          backSideClass='card__side--back-2'
          tourInfo={tourInfo2}
          price={497}
        />
        <TourInfoBox
          pictureClass='card__picture--3'
          headingClass='card__heading-span--3'
          cardHeading='The snow adventure'
          backSideClass='card__side--back-3'
          tourInfo={tourInfo3}
          price={897}
        />
      </div>
    </section>
  );
}

export default Tours;
