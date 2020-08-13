import React from "react";

const FormInput = ({ name }) => {
  return (
    <>
      <input
        type='text'
        className='form__input'
        placeholder={name}
        id={name}
        required
      />
      <label htmlFor={name} className='form__label'>
        {name}
      </label>
    </>
  );
};

export default FormInput;
