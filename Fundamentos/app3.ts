const fs = require('fs');


  // Leer el contenido del archivo
  const content = fs.readFileSync('readme.md', 'utf8');

  // Dividir el contenido en palabras
  const words = content.split(' '); // Usa una expresión regular para separar por espacios, tabulaciones o saltos de línea



  // Contar cuántas veces aparece "react" (sin distinción de mayúsculas/minúsculas)
  //const reactWordCount = words.filter(word => word.toLowerCase() === 'react').length;

const reactWordCount = content.match(/react/gi ).length

  console.log('Palabras:', words.length);
  console.log('Palabras React:',reactWordCount);
