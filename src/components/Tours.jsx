import React from "react";

import TourInfoBox from "./TourInfoBox";
import { TOURINFO1 } from "../data/tourInformatin";

const tourInfo1 = TOURINFO1;

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
        <TourInfoBox />
        <TourInfoBox />
      </div>
    </section>
  );
}

export default Tours;
