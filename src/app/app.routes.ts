import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadComponent: () => import("./pages/pokemons-page/pokemons-page.component"),
  },
  {
    path: 'pokemons/page/:pageNumber/limit/:limitNumber',
    loadComponent: () => import("./pages/pokemons-page/pokemons-page.component"),
  },
  {
    path: 'pokemons/details/:name',
    loadComponent: () => import("./pages/pokemon-details/pokemon-details.component"),
  },
  {
    path: 'test',
    loadComponent: () => import("./pages/test-page/test-page.component"),
  },
  {
    path: 'test/page/:pageNumber/limit/:limitNumber',
    loadComponent: () => import("./pages/test-page/test-page.component"),
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'pokemons'
  }

];
