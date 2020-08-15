import React from "react";

import FormInput from "./FormInput";
import FormRadioBtn from "./FormRadioBtn";

const Form = () => {
  return (
    <form action='#' className='form'>
      <div className='u-margin-bottom-medium'>
        <h2 className='heading-secondary'>Start booking now</h2>
      </div>

      <FormInput name='Full Name' type='text' />
      <FormInput name='Email Address' type='email' />

      <div className='form__group'>
        <FormRadioBtn id='small' label='Small tour group' />
        <FormRadioBtn id='large' label='Large tour group' />
      </div>
    </form>
  );
};

export default Form;
