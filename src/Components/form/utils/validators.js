export const required = value => value && value.trim() !== '';
export const minLength = (value, min) => value && value.length >= min;