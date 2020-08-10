import React from "react";

import StoryBox from "./StoryBox";

function Stories() {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/images/video.mp4' type='video/mp4' />
          <source src='/images/video.webm' type='video/webm' />
          Your browser is not supported!
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>

      <StoryBox
        image={"/images/nat-8.jpg"}
        name='Mary Smith'
        title='I had the best week ever with my family'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        veritatis exercitationem placeat enim ad ipsum, sed dicta at
        provident. exercitationem placeat enim ad ipsum, sed dicta at
        provident dolor sit amet consectetur adipisicing elit Minus
        veritatis exercitationem placeat.'
      />
      <StoryBox
        image={"/images/nat-9.jpg"}
        name='Jack Wilsone'
        title='Wow! my life is completely different now'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        veritatis exercitationem placeat enim ad ipsum, sed dicta at
        provident. exercitationem placeat enim ad ipsum, sed dicta at
        provident dolor sit amet consectetur adipisicing elit Minus
        veritatis exercitationem placeat.'
      />

      <div className='u-center-text u-margin-top-huge'>
        <a href='#' className='btn-text'>
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Stories;
