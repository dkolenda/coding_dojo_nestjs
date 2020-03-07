export class Pokemon {
  constructor(pokemon: any, version: 'long' | 'short' = 'long') {
    this.name = pokemon.name;
    this.types = pokemon.types.map(type => type.type.name);
    this.img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
      pokemon.id
    }.png`;
    if (version === 'long') {
      this.stats = pokemon.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));
    }
  }

  name: string;
  types: Array<string>;
  img: string;
  stats: Array<string>;
}
