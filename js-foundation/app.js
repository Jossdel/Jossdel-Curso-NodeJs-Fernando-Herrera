const { getUUID, getAge } = require("../plugins/index");

const { builMakePerson } = require("./factory.js");

// const { getUserById} = require('./callbacks')
// getUserById(1,(err , user ) =>{
//     if(err) throw new Error(`lo siento no encontramos el id ${err}`)
//         console.log(user);
// }

// )

const makePerson = builMakePerson({ getUUID, getAge });

const obj = { name: "Josue", birthdate: "2004-12-19" };
const person = makePerson(obj);
console.log(person);
