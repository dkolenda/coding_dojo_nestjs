import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon';
import * as Api from './connector';
const fetch = require('node-fetch');

@Injectable()
export class PokemonService {
  async getAllPokemons(limit: string, offset: string) {
    try {
      let resp = await Api.getAllPokemonUrls(limit, offset);
      const respBody = await resp.json();
      const pokemonsUrl = respBody.results.map(pokemon => {
        return pokemon.url;
      });

      const pokemonsData = [];
      for (let i = 0; i < pokemonsUrl.length; i++) {
        let pokemonData = await this.getPokemon(pokemonsUrl[i]);
        pokemonsData.push(pokemonData);
      }
      return pokemonsData;
    } catch (e) {
      console.log(e);
    }
  }

  async getSinglePokemon(id: string) {
    let resp = await Api.getSinglePokemonUrl(id);
    const responsBody = await resp.json();
    const singlePokemon = new Pokemon(responsBody, 'long');
    return singlePokemon;
  }

  protected async getPokemon(pokemonUrl: string) {
    return await fetch(pokemonUrl)
      .then(res => res.json())
      .then(pokemon => {
        return new Pokemon(pokemon, 'short');
      });
  }
}
