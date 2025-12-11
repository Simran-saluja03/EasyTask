import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root', //something which other components use to identify this component.
  standalone: true,
  imports: [HeaderComponent], //whatever components are used inside this component. (in html)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
