import React from 'react';
import { useForm } from 'react-hook-form';
import './reactForm.css';
import {errorMessages} from "./utils/errorMessages.js";
import {formLabels} from "./constants/formLabels.js";

function ReactForm() {


    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleFormSubmit = data => { console.log(data);};

    return (
       <div className="outer-container-form">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>{formLabels.firstName}</label>
            <input type="text" {...register("firstName", {
                required: {value: true, message: errorMessages.required},
                minLength: { value: 2, message: errorMessages.minLength },
            })} />
            {errors.firstName && <span>{errors.firstName.message}</span>}
            <input type="text" {...register("lastName", {
                required: true,
                minLength: 2,
                // validate: (value) => value.includes('T')
            })} />

            <input type="number" {...register("age", {
                required: true,
                minLength: 2,
                // validate: (value) => value.includes('T')
            })} />
            <input type="text" {...register("postalCode", {
                required: true,
                minLength: 2,
                // validate: (value) => value.includes('T')
            })} />


            <input type="checkbox" {...register("deliveryFrequence", {everyWeek: true, everyOtherWeek: true, everyMonth: true})} />
<input type={"radio"} {...register("timeFrame", {day: true, evening: true})} />
            <textarea {...register("comment", {})} />
            <input type="checkbox" {...register("terms", {required: true})} />



            <input type="submit"/>
        </form>
       </div>
    );
}

export default ReactForm;