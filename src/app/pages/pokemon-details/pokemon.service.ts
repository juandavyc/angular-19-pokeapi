import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Pokemon } from './pokemon.response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }


  private http = inject(HttpClient);
  private URL = "https://pokeapi.co/api/v2/pokemon";

  //private requestSubject$ = new Subject<{ page: number, size: number }>();

  // page: number, size: number

  public getPokemon(name:string= ''):Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.URL}/${name}`)
      .pipe(
        delay(500),
      )
  }

}
