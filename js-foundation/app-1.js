const { getPokemonByid } = require("./promises");

getPokemonByid(3)
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finalizado...");
  });
