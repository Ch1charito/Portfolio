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
      testlink: "http://join.r-bautista-buschmann.de/",
    },
    {
      name: "Pollo Loco",
      image: "assets/images/my_projects_setion/pollo_loco_default.png",
      description: "projects.polloLoco.description",
      languages: "JavaScript | HTML | CSS",
      gitlink: "https://github.com/Ch1charito/El-Pollo-Loco",
      testlink: "http://el-pollo-loco.r-bautista-buschmann.de/",
    }
  ]
}
