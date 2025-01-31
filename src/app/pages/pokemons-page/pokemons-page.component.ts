import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort, } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { map, Observable, of, switchMap, tap } from 'rxjs';

import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';

import { Pokemon } from './pokeapi.response';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PokemonsService } from './services/pokemons.service';
import { PokemonFrontPipe } from "./pipes/pokemonFront.pipe";


interface Columns {
  id: string;
  label: string;
}

@Component({
  selector: 'app-pokemons-page',
  imports: [
    MatTable,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    RouterLink,
    CommonModule,
    PokemonFrontPipe
],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent {


  private pokemonService = inject(PokemonsService);

  public columns = signal<Columns[]>([
    { id: 'id', label: 'No.' },
    { id: 'name', label: 'Name' },
    { id: 'url', label: 'Url' },
    { id: 'image', label: 'Image' },
    { id: 'details', label: 'Details' }
  ]);

  pagination = signal<{ page: number, size: number }>({ page: 0, size: 5 });

  resultLength = signal<number>(0);

  displayedColumns = signal<String[]>(this.columns().map(col => col.id));

  displayedData = rxResource({
    request: () => (this.pagination()),
    loader: (loaderParams): Observable<Pokemon[]> => {
      return this.pokemonService.getPokemons(loaderParams.request)
        .pipe(
          tap(pokemons => this.resultLength.set(pokemons.count)),
          map(({ results }) => results.map((pokemon: Pokemon) => {
            const id = pokemon.url.split("/").at(-2);
            return {
              name: pokemon.name,
              url: pokemon.url,
              id,
              image:id,
              details: id,
            }
          }))
        )
    }
  })



  handlePageEvent(e: PageEvent) {
    this.pagination.update(up => ({ page: e.pageIndex, size: e.pageSize }));
  }

  handleSortEvent(e: Sort) {

    const active = e.active as keyof Pokemon;
    const direction = e.direction === "asc" ? 1 : -1;
    const sorted = this.displayedData.value()!
      .sort((a, b) => direction * a[active].localeCompare(b[active]));

    this.displayedData.set([...sorted]);

  }

}
