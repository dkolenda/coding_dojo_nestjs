import { Controller, Get, Query, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  getAll(@Query('limit') limit: string, @Query('offset') offset: string) {
    return this.pokemonService.getAllPokemons(limit, offset);
  }

  @Get(':id')
  getSingle(@Param() param: any) {
    return this.pokemonService.getSinglePokemon(param.id);
  }
}
