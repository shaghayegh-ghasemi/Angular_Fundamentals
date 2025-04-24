import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})

export class ProfileCardComponent {
  userName: string = "Shaghayegh Ghasemi";
  bio: string = "I'm a computer engineer interested in app developement and AI.";
  imgUrl: string = "https://fakeimg.pl/600x400";
}
