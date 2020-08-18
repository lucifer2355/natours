import React from "react";

const Popup = () => {
  return (
    <div className='popup'>
      <div className='popup__content'>
        <div className='popup__left'>
          <img src='/images/nat-8.jpg' alt='Tour' className='popup__img' />
          <img src='/images/nat-9.jpg' alt='Tour' className='popup__img' />
        </div>
        <div className='popup__right'>
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start booking now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Important &ndash; Please read these terms before booking
          </h3>
          <p className='popup__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            ultricies mi quis hendrerit dolor magna eget est lorem. A erat nam
            at lectus urna duis convallis convallis. Vulputate mi sit amet
            mauris commodo quis imperdiet massa tincidunt. Condimentum lacinia
            quis vel eros donec ac. Erat velit scelerisque in dictum non
            consectetur. Nunc mattis enim ut tellus. Molestie at elementum eu
            facilisis sed. Diam quis enim lobortis scelerisque fermentum dui
            faucibus in. Purus semper eget duis at tellus at urna. Tortor
            dignissim convallis aenean et. Id semper risus in hendrerit gravida
            rutrum quisque non. Mattis nunc sed blandit libero. Ut tellus
            elementum sagittis vitae et leo duis. At risus viverra adipiscing at
            in tellus integer feugiat scelerisque.
          </p>
          <a href='#' className='btn btn--green'>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
