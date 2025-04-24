import { Component } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
