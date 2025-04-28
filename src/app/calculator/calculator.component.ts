import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  add(){
    this.result = this.a + this.b;
  }

  subtract(){
    this.result = this.a - this.b;
  }

  multiply(){
    this.result = this.a * this.b;
  }

  divide(){
    if (this.b !== 0){
      this.result = this.a / this.b;
    } else {
      alert("Division by zero!");
    }
  }
}
