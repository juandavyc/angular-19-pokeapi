import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'pokemons',
    loadComponent: () => import("./pages/pokemons-page/pokemons-page.component"),
  },
  {
    path: 'pokemons/:name',
    loadComponent: () => import("./pages/pokemon-details/pokemon-details.component"),
  },
  {
    path: '**',
    redirectTo: 'pokemons'
  }

];
