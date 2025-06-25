import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { TeamplayerComponent } from "./teamplayer/teamplayer.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, AboveTheFoldComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, TeamplayerComponent, FooterComponent, ContactFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
