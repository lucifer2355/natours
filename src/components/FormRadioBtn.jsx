import React from "react";

const FormRadioBtn = ({ id, label }) => {
  return (
    <div className='form__group'>
      <div className='form__radio-group'>
        <input type='radio' className='form__radio-input' id={id} />
        <label htmlFor={id} className='form__radio-label'>
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormRadioBtn;
