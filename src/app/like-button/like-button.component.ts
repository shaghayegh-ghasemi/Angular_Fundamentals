import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {
  isLiked: boolean = false;
  likeCount: number = 0;

  toggleLike(): void {
    this.isLiked = !this.isLiked;
    
    if (this.isLiked) {
      this.likeCount += 1;
    } else if (this.likeCount > 0) {
      this.likeCount -= 1;
    } 
  }
}
