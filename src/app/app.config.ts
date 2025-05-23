import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; 
import { provideHttpClient } from '@angular/common/http';

import { ProductListComponent } from './products/product-list/product-list.component'; 
import { CalculatorComponent } from './calculator/calculator.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { DataDisplayComponent } from './data/data-display/data-display.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputDisplayComponent } from './input-display/input-display.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: 'profile-card', component: ProfileCardComponent },
      { path: 'like-button', component: LikeButtonComponent },
      { path: 'input-display', component: InputDisplayComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'items', component: ItemListComponent },
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
      { path: 'todo', component: TodoListComponent },
      { path: 'data', component: DataDisplayComponent },
    ]),
    provideHttpClient()  
  ]
};
