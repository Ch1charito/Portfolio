import { Component } from '@angular/core';
import { Feedback } from '../../shared/interfaces/feedback';
import { FeedbackItemComponent } from "./feedback-item/feedback-item.component";
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-teamplayer',
  imports: [FeedbackItemComponent, TranslatePipe],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  feedbacks:Array<Feedback> = [
    {
      name: "Burak Keles",
      project: "Project Join",
      personalFeedback: "teamplayer.feedback1.personalFeedback",
    },
    {
      name: "Evelyn Marx",
      project: "Project Pollo Loco",
      personalFeedback: "teamplayer.feedback2.personalFeedback",
    },
    {
      name: "Adem Ö.",
      project: "Project Join",
      personalFeedback: "teamplayer.feedback3.personalFeedback",
    }
  ]
}
