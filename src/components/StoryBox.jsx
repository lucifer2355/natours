import React from "react";

function StoryBox({ image, name, title, description }) {
  return (
    <div className='row'>
      <div className='story'>
        <figure className='story__shape'>
          <img src={image} alt='Personon a tour' className='story__img' />
          <figcaption className='story__caption'>{name}</figcaption>
        </figure>
        <div className='story__text'>
          <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StoryBox;
