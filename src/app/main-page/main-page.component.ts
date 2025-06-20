import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, AboveTheFoldComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
