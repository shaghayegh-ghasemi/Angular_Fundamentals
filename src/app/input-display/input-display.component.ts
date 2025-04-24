import { Component } from '@angular/core';

@Component({
  selector: 'app-input-display',
  imports: [],
  templateUrl: './input-display.component.html',
  styleUrl: './input-display.component.css'
})
export class InputDisplayComponent {
  inputText: string = '';

  updateText(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.inputText = text;
  } 
}
