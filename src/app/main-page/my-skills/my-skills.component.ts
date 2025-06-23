import { Component } from '@angular/core';
import { Skill } from '../../shared/interfaces/skill';
import { SkillItemComponent } from './skill-item/skill-item.component';

@Component({
  selector: 'app-my-skills',
  imports: [SkillItemComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills:Array<Skill> = [
    {
      name: "Angular",
      image: "/assets/images/my_skills_section/angular.png",
    },
    {
      name: "TypeScript",
      image: "/assets/images/my_skills_section/typescript.png",
    },
    {
      name: "JavaScript",
      image: "/assets/images/my_skills_section/javascript.png",
    },
    {
      name: "HTML",
      image: "/assets/images/my_skills_section/html.png",
    },
    {
      name: "CSS",
      image: "/assets/images/my_skills_section/css.png",
    },
    {
      name: "Rest-Api",
      image: "/assets/images/my_skills_section/rest_api.png",
    },
    {
      name: "Firebase",
      image: "/assets/images/my_skills_section/firebase.png",
    },
    {
      name: "GIT",
      image: "/assets/images/my_skills_section/git.png",
    },
    {
      name: "Scrum",
      image: "/assets/images/my_skills_section/scrum.png",
    },
    {
      name: "Material design",
      image: "/assets/images/my_skills_section/material_design.png",
    },
    {
      name: "Challenge me",
      image: "/assets/images/my_skills_section/challenge_me.png",
    },
  ]
}
