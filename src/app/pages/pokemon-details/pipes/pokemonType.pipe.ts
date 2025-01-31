import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {

  transform(types:{slot:number; type:{name:string}}[]): string[] {
    return types.map(te=>te.type.name);
  }

}
