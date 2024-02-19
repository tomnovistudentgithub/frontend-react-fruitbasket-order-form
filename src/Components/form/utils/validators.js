export const required = value => value && value.trim() !== '';
export const minLength = (value, min) => value && value.length >= min;
export const maxLength = (value, max) => value && value.length <= max;

export const minAge = value => value && value >= 12;
export const maxAge = value => value && value <= 120;

