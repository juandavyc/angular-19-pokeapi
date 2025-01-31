import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
   ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {







}
