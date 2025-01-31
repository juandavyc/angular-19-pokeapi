import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage',
})
export class PokemonImagePipe implements PipeTransform {

  transform(id: number ): string {
    console.log("im-here");
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

}
