import React from "react";

import FormInput from "./FormInput";

const Form = () => {
  return (
    <form action='#' className='form'>
      <div className='form__group'>
        <FormInput name='Full Name' />
      </div>
    </form>
  );
};

export default Form;
