import React from "react";

function Stories() {
  return (
    <section className='section-stories'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              src='/images/nat-8.jpg'
              alt='Personon a tour'
              className='story__img'
            />
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              veritatis exercitationem placeat enim ad ipsum, sed dicta at
              provident. exercitationem placeat enim ad ipsum, sed dicta at
              provident dolor sit amet consectetur adipisicing elit Minus
              veritatis exercitationem placeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
