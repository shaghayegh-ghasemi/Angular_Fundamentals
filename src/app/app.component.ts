import { Component } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputDisplayComponent } from './input-display/input-display.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, LikeButtonComponent, InputDisplayComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
