import React from "react";
import styled from "styled-components";

function Input({ placeholder, onChange, value, type, name, ref }) {
  return (
    <InputWrapper>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        ref = {ref}
      />
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    width: 100%;
  }
  input[type="number"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
