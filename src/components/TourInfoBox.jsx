import React from "react";

function TourInfoBox() {
  return (
    <div className='col-1-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>FRONT</div>
        <div className='card__side card__side--back card__side--back-1'>
          BACK
        </div>
      </div>
    </div>
  );
}

export default TourInfoBox;
