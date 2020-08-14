import React from "react";

import FormInput from "./FormInput";

const Form = () => {
  return (
    <form action='#' className='form'>
      <div className='u-margin-bottom-medium'>
        <h2 className='heading-secondary'>Start booking now</h2>
      </div>

      <FormInput name='Full Name' type='text' />
      <FormInput name='Email Address' type='email' />
    </form>
  );
};

export default Form;
