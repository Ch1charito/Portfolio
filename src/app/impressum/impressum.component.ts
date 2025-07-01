import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { HeaderComponent } from "../main-page/header/header.component";
import { FooterComponent } from "../main-page/footer/footer.component";

@Component({
  selector: 'app-impressum',
  imports: [TranslatePipe, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
