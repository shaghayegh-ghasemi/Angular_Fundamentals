import { Component } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { LikeButtonComponent } from './like-button/like-button.component';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, LikeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
