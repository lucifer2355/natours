import React from "react";

const FormInput = ({ name, type }) => {
  return (
    <div className='form__group'>
      <input
        type={type}
        className='form__input'
        placeholder={name}
        id={name}
        required
      />
      <label htmlFor={name} className='form__label'>
        {name}
      </label>
    </div>
  );
};

export default FormInput;
