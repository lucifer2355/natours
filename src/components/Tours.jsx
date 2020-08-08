import React from "react";

import TourInfoBox from "./TourInfoBox";

function Tours() {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most popular tours</h2>
      </div>

      <div className='row'>
        <TourInfoBox />
      </div>
    </section>
  );
}

export default Tours;
