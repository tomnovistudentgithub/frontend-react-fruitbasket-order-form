export const errorMessages = {
    required: 'This field is required',
    minLength: (minLength) => `This field should have at least ${minLength} characters`,
    maxLength: (maxLength) => `This field should have a max of ${maxLength} characters`,
    minAge: (minAge) => `You should be at least ${minAge} years old to register`,
    maxAge: (maxAge) => `You should be at most ${maxAge} years old to register`
};

