import React from "react";

function Section() {
  return (
    <section className='section-about'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            You are going to love with nature
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            magni ad, error assumenda provident non numquam consectetur itaque
            nostrum aperiam ipsam dolore a delectus? Nulla sunt modi perferendis
            voluptatum facere.
          </p>

          <h3 className='heading-tertiary u-margin-bottom-small'>
            Live advantures like you never have before
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            veritatis exercitationem placeat enim ad ipsum, sed dicta at
            provident.
          </p>

          <a href='#' className='btn-text'>
            Learn more &rarr;
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <img
              srcSet='../images/nat-1.jpg 300w, ../images/nat-1-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Photo 1'
              className='composition__photo composition__photo--p1'
              src='../images/nat-1-large.jpg'
            />
            <img
              srcSet='../images/nat-2.jpg 300w, ../images/nat-2-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Photo 1'
              className='composition__photo composition__photo--p2'
              src='../images/nat-2-large.jpg'
            />
            <img
              srcSet='../images/nat-3.jpg 300w, ../images/nat-3-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Photo 1'
              className='composition__photo composition__photo--p3'
              src='../images/nat-3-large.jpg'
            />
          </div>
        </div>
      </div>
    </section>

    // <section>
    //   <div className='row'>
    //     <div className='col-1-of-2'>Col 1 of 2</div>
    //     <div className='col-1-of-2'>Col 2 of 2</div>
    //   </div>

    //   <div className='row'>
    //     <div className='col-1-of-3'>Col 1 of 3</div>
    //     <div className='col-1-of-3'>Col 2 of 3</div>
    //     <div className='col-1-of-3'>Col 3 of 3</div>
    //   </div>

    //   <div className='row'>
    //     <div className='col-1-of-3'>Col 1 of 3</div>
    //     <div className='col-2-of-3'>Col 2 of 3</div>
    //   </div>

    //   <div className='row'>
    //     <div className='col-1-of-4'>Col 1 of 4</div>
    //     <div className='col-1-of-4'>Col 2 of 4</div>
    //     <div className='col-1-of-4'>Col 3 of 4</div>
    //     <div className='col-1-of-4'>Col 4 of 4</div>
    //   </div>

    //   <div className='row'>
    //     <div className='col-1-of-4'>Col 1 of 4</div>
    //     <div className='col-1-of-4'>Col 2 of 4</div>
    //     <div className='col-2-of-4'>Col 3 of 4</div>
    //   </div>

    //   <div className='row'>
    //     <div className='col-1-of-4'>Col 1 of 4</div>
    //     <div className='col-3-of-4'>Col 3 of 4</div>
    //   </div>
    // </section>
  );
}

export default Section;
