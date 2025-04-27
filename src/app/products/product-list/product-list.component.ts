import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {name: 'Laptop', price: 1200, description: "Powerful performance for work and play."},
    {name: 'Mouse', price: 25, description: "Ergonomic design for smooth navigation."},
    {name: 'Keyboard', price: 75, description: "Comfortable typing with modern features."},
    {name: 'Coolpad', price: 100, description: "Keeps your device cool during use."},
    {name: 'Monitor', price: 425, description: "Vivid display with adjustable settings."},
    {name: 'Headphones', price: 250, description: "Noise-cancelling headphones."},
  ];

  addedMessage = '';

  onAddToCart(product: any){
    this.addedMessage = `${product.name} added to cart!`;
  }
}
