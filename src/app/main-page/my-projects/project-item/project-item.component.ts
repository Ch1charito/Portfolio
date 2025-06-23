import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() projects!:Project;
  @Input() index!: number;

}
