import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { IfLoggedInDirective } from '../../directives/if-logged-in.directive';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, TruncatePipe, HighlightDirective, IfLoggedInDirective],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  isLogegdIn: boolean = true;

  items = [
    {
      name: 'Laptop',
      price: 2000,
      releaseDate: new Date(2025, 3, 17),
      rating: 0.84,
      description: 'A powerful laptop designed for high-performance tasks, ideal for professionals and gamers.'
    },
    {
      name: 'Phone',
      price: 1400,
      releaseDate: new Date(2025, 2, 9),
      rating: 0.95,
      description: 'A sleek smartphone with cutting-edge features, perfect for photography and productivity on the go.'
    },
    {
      name: 'Tablet',
      price: 850,
      releaseDate: new Date(2025, 4, 21),
      rating: 0.71,
      description: 'A versatile tablet with a vivid display, great for entertainment and casual work.'
    },
    {
      name: 'Smart Watch',
      price: 980,
      releaseDate: new Date(2025, 1, 6),
      rating: 0.63,
      description: 'A stylish smartwatch with fitness tracking and essential smart features, ideal for staying connected.'
    }
  ];
}
