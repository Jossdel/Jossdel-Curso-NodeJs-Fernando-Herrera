const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) throw new Error('Birthday is required');
  
    return getAgePlugin(birthdate); // Calcula la edad basada en la fecha actual
};

module.exports = {
    getAge: getAge
};