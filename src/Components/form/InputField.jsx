import React from 'react';
import { formLabels } from './constants/formLabels';


function InputField({ name, register, errors, label, type, validation, options }) {
    return (
        <div className="input-field-outer">
            <label className="label">{label + ":"}</label>
            {type === 'radio' && options ? (
                    options.map((option, index) => (
                        <div key={index}>
                            <input className="radio" type={type} {...register(name)} value={option.value} />
                            <label>{option.label}</label>
                        </div>
                    ))
            ) : type === 'select' && options ? (
                <select {...register(name, validation)}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                type === 'textarea' ? (
                    <textarea {...register(name, validation)} />
                ) : (
                <input type={type} {...register(name, validation)}
                       min={type === 'number' ? 0 : undefined}

                />
            ))}
            {errors[name] && <span className="error-message">{errors[name].message}</span>}
        </div>
    );
}

export default InputField;