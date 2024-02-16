import React from 'react';
import { formLabels } from '../constants/formLabels';


function InputField({ name, register, errors, label, type, validation }) {
    return (
        <div>
            <label>{formLabels[label]}</label>
            <input type={type} {...register(name, validation)} />
            {errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
}

export default InputField;