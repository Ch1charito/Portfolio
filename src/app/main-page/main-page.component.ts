import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { WhyMeComponent } from "./why-me/why-me.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, AboveTheFoldComponent, WhyMeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
