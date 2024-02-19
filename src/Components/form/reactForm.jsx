import React from 'react';
import { useForm } from 'react-hook-form';
import './reactForm.css';
import {errorMessages} from "./utils/errorMessages.js";
import {formLabels} from "./constants/formLabels.js";
import InputField from "./InputField.jsx";
import {minLength} from "./utils/validators.js";

function ReactForm({ onSubmit }) {


    const { register, handleSubmit, formState: {errors}, reset } = useForm({mode: 'onSubmit'});


    const handleFormSubmit = handleSubmit((data) => {
        onSubmit(data, reset);
    });

    return (
       <div className="outer-container-form">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

            <InputField
                name="firstName"
                register={register}
                errors={errors}
                label={formLabels.firstName}
                type="text"
                validation={{
                    required: { value: true, message: errorMessages.required },
                    minLength: { value: 3, message: errorMessages.minLength(3) } }}
            />

            <InputField
                name="lastName"
                register={register}
                errors={errors}
                label={formLabels.lastName}
                type="text"
                validation={{
                    required: { value: true, message: errorMessages.required },
                    minLength: { value: 5, message: errorMessages.minLength(5) } }}
            />

            <InputField
                name={"age"}
                register={register}
                errors={errors}
                label={formLabels.age}
                type={"number"}
                validation={{
                    required: {value: true, message: errorMessages.required},
                        min: {value: 12, message: errorMessages.minAge(12)},
                        max: {value: 120, message: errorMessages.maxAge(120)}}}
            />

            <InputField
                name={"deliveryFrequence"}
                register={register}
                errors={errors}
                label={formLabels.deliveryFrequence}
                type={"select"}
                validation={{
                    required: {value: true, message: errorMessages.required}
                }}
                options={[
                    {value: 'everyWeek', label: 'Every Week'},
                    {value: 'everyOtherWeek', label: 'Every Other Week'},
                    {value: 'everyMonth', label: 'Every Month'}
                ]}
            />

            <InputField
                name={"timeFrame"}
                register={register}
                errors={errors}
                label={formLabels.timeFrame}
                type={"radio"}
                validation={{
                    required: {value: true, message: errorMessages.required}
                }}
                options={[
                    {value: 'day', label: 'Day'},
                    {value: 'evening', label: 'Evening'}
                ]}
            />

            <InputField
                name={"comment"}
                register={register}
                errors={errors}
                label={formLabels.comment}
                type={"textarea"}
                validation={{
                    maxLength: {value: 200, message: errorMessages.maxLength(200)

                    }
                }}
            />

            <InputField
                name={"terms"}
                register={register}
                errors={errors}
                label={formLabels.terms}
                type={"checkbox"}
                validation={{
                    required: {value: true, message: errorMessages.required}
                }}
            />

            <input type="submit" disabled={Object.keys(errors).length > 0}/>

        </form>
       </div>
    );
}

export default ReactForm;