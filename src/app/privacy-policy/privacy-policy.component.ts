import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { HeaderComponent } from "../main-page/header/header.component";
import { FooterComponent } from "../main-page/footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslatePipe, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
