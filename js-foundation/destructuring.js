// console.log(process.env );

const {SHELL , npm} = process.env
console.table({SHELL , npm});

const caracteres = ['flash', 'superman','Green latern' ,'batman']

const [ , , ,batman] = caracteres

console.log(batman);