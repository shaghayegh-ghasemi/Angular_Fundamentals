import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blogId: number | null = null;
  blog: any = null;

  blogData = [
    { id: 1, title: 'Angular Basics', category: 'Angular', content: 'An introduction to Angular, covering its core concepts and features.' },
    { id: 2, title: 'React', category: 'React', content: 'A beginner-friendly guide to building dynamic web applications with React.' },
    { id: 3, title: 'Angular vs. React', category: 'Comparison', content: 'A detailed comparison of Angular and React to help choose the right framework.' },
    { id: 4, title: 'CSS Tricks', category: 'Frontend', content: 'Tips and tricks for mastering CSS and creating stunning web designs.' },
    { id: 5, title: 'Spring boot', category: 'Backend', content: 'Exploring the features of Spring Boot for efficient backend development.' },
    { id: 6, title: 'HTML Fundamentals', category: 'Frontend', content: 'A comprehensive guide to the basics of HTML for building web pages.' }
  ];

  constructor (private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.blogId = Number(params.get('id'));
      this.blog = this.blogData.find(b => b.id === this.blogId);
    })
  }
}
