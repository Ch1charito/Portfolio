import { Component, Input } from '@angular/core';
import { Feedback } from '../../../shared/interfaces/feedback';

@Component({
  selector: 'app-feedback-item',
  imports: [],
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.scss'
})
export class FeedbackItemComponent {
  @Input() feedbacks!: Feedback;
}
