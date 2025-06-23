import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/project';
import { ProjectItemComponent } from "./project-item/project-item.component";

@Component({
  selector: 'app-my-projects',
  imports: [ProjectItemComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects:Array<Project> = [
    {
      name: "Join",
      image: "/assets/images/my_projects_setion/join_default.png",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      languages: "Angular | TypeScript | HTML | CSS | Firebase",
      gitlink: "https://github.com/Ch1charito/El-Pollo-Loco",
      testlink: "https://robin-bautista-buschmann.developerakademie.net/meine_seiten/pollo-loco",
    },
    {
      name: "Pollo Loco",
      image: "/assets/images/my_projects_setion/pollo_loco_default.png",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      languages: "JavaScript | HTML | CSS",
      gitlink: "https://github.com/Ch1charito/El-Pollo-Loco",
      testlink: "https://robin-bautista-buschmann.developerakademie.net/meine_seiten/pollo-loco",
    }
  ]
}
