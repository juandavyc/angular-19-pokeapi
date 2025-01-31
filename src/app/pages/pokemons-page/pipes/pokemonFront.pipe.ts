import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFront',
})
export class PokemonFrontPipe implements PipeTransform {

  transform(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
  }

}
