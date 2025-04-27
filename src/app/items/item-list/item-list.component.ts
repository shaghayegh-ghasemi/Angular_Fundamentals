import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = [
    {name: 'Laptop', price: 2000, releaseDate: new Date(2025, 3, 17), rating: 0.84},
    {name: 'Phone', price: 1400, releaseDate: new Date(2025, 2, 9), rating: 0.95},
    {name: 'Tablet', price: 850, releaseDate: new Date(2025, 4, 21), rating: 0.71},
    {name: 'Smart Watch', price: 980, releaseDate: new Date(2025, 1, 6), rating: 0.63},
  ]
}
