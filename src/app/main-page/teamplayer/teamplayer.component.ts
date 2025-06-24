import { Component } from '@angular/core';
import { Feedback } from '../../shared/interfaces/feedback';
import { FeedbackItemComponent } from "./feedback-item/feedback-item.component";

@Component({
  selector: 'app-teamplayer',
  imports: [FeedbackItemComponent],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  feedbacks:Array<Feedback> = [
    {
      name: "Noah Mueller",
      project: "Project Sharkie",
      personalFeedback: '"Marcus had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person."',
    },
    {
      name: "Evelyn Marx",
      project: "Project Pollo Loco",
      personalFeedback: '" He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. "',
    },
    {
      name: "James Rugman",
      project: "Project Join",
      personalFeedback: '" He is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague."',
    }
  ]
}
