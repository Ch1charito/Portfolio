import { Component, Input } from '@angular/core';
import { Feedback } from '../../../shared/interfaces/feedback';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-feedback-item',
  imports: [TranslatePipe],
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.scss'
})
export class FeedbackItemComponent {
  @Input() feedbacks!: Feedback;
}
