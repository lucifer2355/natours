import React from "react";

import Form from "./Form";

const BookingSection = () => {
  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
