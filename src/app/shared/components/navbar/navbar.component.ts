import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {


 }
