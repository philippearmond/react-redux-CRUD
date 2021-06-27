import React from 'react';

import './Input.scss';

const Input = ({ label, inputType, value, onChangeInputHandler }) => (
    <div id="InputComponent">
        <label>{label}</label>
        <input type={inputType} value={value} onChange={onChangeInputHandler} />
    </div>
);

export default Input;
