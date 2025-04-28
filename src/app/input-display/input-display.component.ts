import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-display',
  imports: [CommonModule],
  templateUrl: './input-display.component.html',
  styleUrl: './input-display.component.css'
})
export class InputDisplayComponent {
  inputText: string = '';

  updateText(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.inputText = text;
  } 

  // Conditional Display with *ngIf
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  // List Rendering with *ngFor
  items = [
    {name: 'Laptop', price: 1200},
    {name: 'Mouse', price: 25},
    {name: 'Keyword', price: 75},
    {name: 'Coolpad', price: 100},
    {name: 'Monitor', price: 425},
  ]
  
}
