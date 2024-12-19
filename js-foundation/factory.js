
// const {getUUID ,getAge} =require('./plugins/index')

const builMakePerson = ({getUUID , getAge}) =>{

    return ({name , birthdate}) =>{
    
        return {
            id : getUUID(),
            name:name,
            birthdate:birthdate,
            age: getAge(birthdate),
        }   
        
        
    }
}











// const jos = buildPerson(obj)

module.exports={
    builMakePerson,
}