import { ChangeDetectionStrategy, Component, ElementRef, inject, linkedSignal, signal, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonService } from './pokemon.service';
import { CommonModule } from '@angular/common';


/* card */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

import { Type } from './pokemon.response';
import { PokemonImagePipe } from "./pipes/pokemonImage.pipe";
import { MatTabsModule } from '@angular/material/tabs';
import { AudioComponent } from "./components/audio/audio.component";
import { PokemonTypePipe } from "./pipes/pokemonType.pipe";
import { MatChipsModule } from '@angular/material/chips';
import { PokemonStatsPipe } from "./pipes/pokemonStats.pipe";
import {MatBadgeModule} from '@angular/material/badge';
@Component({
  selector: 'app-pokemon-details',
  imports: [
    MatProgressSpinnerModule,
    // card
    MatButtonModule,
    MatCardModule,
    // tabs
    // icons
    MatIconModule,
    MatListModule,
    CommonModule,
    MatTabsModule,
    AudioComponent,
    MatChipsModule,
    MatBadgeModule,
    RouterLink,
    PokemonImagePipe,
    PokemonTypePipe,
    PokemonStatsPipe
],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonDetailsComponent {


  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private pokemonName = linkedSignal({
    source: ()=> this.route.snapshot.paramMap.get('name'),
    computation:(source)=>{
      if(!source){
        this.router.navigateByUrl("/pokemons");
      }
      return source;
    }
  });
  private pokemonService = inject(PokemonService);

  private audio = viewChild<AudioComponent>('audioPlayer');

  playAudio(sound: string) {
    this.audio()!.playAudio(sound);
  }
  public pokemonResource = rxResource({
    request: () => (this.pokemonName()!),
    loader: (loader) => this.pokemonService.getPokemon(loader.request)
  })

  // openDialog(url: string, title:string) {
  //   this.dialog.open(AudioComponent, {
  //     width: '90%',
  //     maxWidth: '350px',
  //     maxHeight: '80vh',
  //     data: { url,title }
  //   });
  // }

}
