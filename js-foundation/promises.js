const { error } = require("console");

const getPokemonByid = async (id) => {
  // return fetch(url)
  //   .then((response) => response.json())
  //   .then((pokemon) => pokemon.name);
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = res.json();

  return pokemon.name;
  // throw new error("Pokemon No existe");
};
module.exports = { getPokemonByid };
