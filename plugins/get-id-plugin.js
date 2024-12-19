const { v4: uuidv4 } = require('uuid');

const getUUID = () => {
    return uuidv4(); // Genera y devuelve un UUID
};

module.exports = {
   getUUID,
};