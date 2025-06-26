import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-project-item',
  imports: [TranslatePipe],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() projects!:Project;
  @Input() index!: number;

}
