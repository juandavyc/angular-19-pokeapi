import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, merge, Observable, Subject, switchMap } from 'rxjs';

import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { PokeApiResponse } from '../pokeapi.response';

interface RequestParams {
  page: number;
  limit: number;
}
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);
  private URL = "https://pokeapi.co/api/v2/pokemon";

  //private requestSubject$ = new Subject<{ page: number, size: number }>();

  // page: number, size: number

  public getPokemons({ page, limit }: RequestParams):Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(`${this.URL}?limit=${limit}&offset=${(page) * limit}`)
      .pipe(
        delay(500),
      )
  }


}
