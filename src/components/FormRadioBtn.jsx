import React from "react";

const FormRadioBtn = ({ id, label }) => {
  return (
    <div className='form__radio-group'>
      <input type='radio' className='form__radio-input' id={id} name='size' />
      <label htmlFor={id} className='form__radio-label'>
        <span className='form__radio-button'></span>
        {label}
      </label>
    </div>
  );
};

export default FormRadioBtn;
