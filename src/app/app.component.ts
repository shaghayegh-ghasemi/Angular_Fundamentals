import { Component } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputDisplayComponent } from './input-display/input-display.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, LikeButtonComponent, InputDisplayComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';

  // Conditional Display with *ngIf
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  // List Rendering with *ngFor
  items = [
    {name: 'Laptop', price: 1200},
    {name: 'Mouse', price: 25},
    {name: 'Keyword', price: 75},
    {name: 'Coolpad', price: 100},
  ]
}
