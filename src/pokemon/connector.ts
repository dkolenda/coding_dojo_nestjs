const fetch = require('node-fetch');
export const getAllPokemonUrls = (
  limit: string = '10',
  offset: string = '0',
) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
};

export const getSinglePokemonUrl = (id: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
