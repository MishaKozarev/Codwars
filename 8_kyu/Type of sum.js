// Return the type of the sum of the two arguments

const typeOfSum = (a, b) => typeof a === 'string' || typeof b === 'string' ? 'string' : 'number';
