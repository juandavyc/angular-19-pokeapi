import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonStats',
})
export class PokemonStatsPipe implements PipeTransform {

  transform(stats: { base_stat: number; stat: { name: string } }[]): { base: number, name: string }[] {
    return stats.map(st => ({ base: st.base_stat, name: st.stat.name }));
  }

}
