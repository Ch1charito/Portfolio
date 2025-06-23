import { Component, Input } from '@angular/core';
import { Skill } from '../../../shared/interfaces/skill';

@Component({
  selector: 'app-skill-item',
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() skills!: Skill;

}
