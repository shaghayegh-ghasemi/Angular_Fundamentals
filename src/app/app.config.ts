import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; 
import { provideHttpClient } from '@angular/common/http';

import { ProductListComponent } from './products/product-list/product-list.component'; 
import { CalculatorComponent } from './calculator/calculator.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ItemListComponent } from './items/item-list/item-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: 'products', component: ProductListComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'items', component: ItemListComponent },
    ]),
    provideHttpClient()  
  ]
};
