import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  blogs = [
    { id: 1, title: 'Angular Basics', category: 'Angular'},
    { id: 2, title: 'React', category: 'React'},
    { id: 3, title: 'Angular vs. React', category: 'Comparison'},
    { id: 4, title: 'CSS Tricks', category: 'Frontend'},
    { id: 5, title: 'Spring boot', category: 'Backend'},
    { id: 6, title: 'HTML Fundamentals', category: 'Frontend'}
  ];

  filteredBlogs = this.blogs;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category){
        this.filteredBlogs = this.blogs.filter(blog => blog.category === category)
      } else {
        this.filteredBlogs = this.blogs;
      }
    })
  }

  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value
    if (selectedCategory) {
      this.router.navigate(['/blog'], { queryParams: { category: selectedCategory } });
    } else {
      this.router.navigate(['/blog']);
    }
  }

  viewBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }
}
