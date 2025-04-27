import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; 

import { ProductListComponent } from './products/product-list/product-list.component'; 
import { CalculatorComponent } from './calculator/calculator.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: 'products', component: ProductListComponent },
      { path: 'calculator', component: CalculatorComponent }
    ])  
  ]
};
