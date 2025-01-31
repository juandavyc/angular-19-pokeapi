import { ChangeDetectionStrategy, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-audio',
  imports: [
    MatSliderModule
  ],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioComponent {

  private audioPlayer = viewChild<ElementRef<HTMLAudioElement>>('audioPlayerTag');


  public playAudio(audio: string) {
    const player = this.audioPlayer();
    if(player){
      player.nativeElement.src = audio;
      player.nativeElement.play();
    }
  }

  changeVolume(volume: string) {
    this.audioPlayer()!.nativeElement.volume = Number.parseFloat(volume);
  }


}
