import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/project';
import { ProjectItemComponent } from "./project-item/project-item.component";
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-my-projects',
  imports: [ProjectItemComponent, TranslatePipe],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects:Array<Project> = [
    {
      name: "Join",
      image: "assets/images/my_projects_setion/join_default.png",
      description: "projects.join.description",
      languages: "Angular | TypeScript | HTML | CSS | Firebase",
      gitlink: "https://github.com/Ch1charito/Join",
      testlink: "https://ik-0225-join-002.developerakademie.net/angular-projects/join/login",
    },
    {
      name: "Pollo Loco",
      image: "assets/images/my_projects_setion/pollo_loco_default.png",
      description: "projects.polloLoco.description",
      languages: "JavaScript | HTML | CSS",
      gitlink: "https://github.com/Ch1charito/El-Pollo-Loco",
      testlink: "https://robin-bautista-buschmann.developerakademie.net/meine_seiten/pollo-loco",
    }
  ]
}
