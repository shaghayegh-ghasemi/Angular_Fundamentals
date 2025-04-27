import { Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputDisplayComponent } from './input-display/input-display.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, LikeButtonComponent, InputDisplayComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // Angular Assignment - part 1
  ngOnInit(): void {
    //  Basic Array operations 

    // 1.1
    const score = 67;
      
    if ( score >= 90 ) {
      console.log("Excellent");
    } else if (score >= 70 ) {
      console.log("Good");
    } else {
      console.log("Average");
    }

    // 1.2
    for (let i = 1; i <= 5; i++) {
      console.log(`Square of ${i} is ${i**2}`);
    }

    // 1.3
    const numbers = [10, 20, 30, 40]

    const doubled_numbers = numbers.map(num => num*2);
    console.log("Doubled array: " + doubled_numbers)

    const filtered_numbers = numbers.filter(num => num > 25);
    console.log("Numbers greater then 25: " + filtered_numbers);

    numbers.forEach(element => {
      console.log("Original Array: " + element);
    });

    // Basic Calculator Functions 
    function add(a: number, b: number): number {
      return a + b;
    }

    function subtract(a: number, b: number): number {
      return a - b;
    }

    function multiply(a: number, b: number): number {
      return a * b;
    }

    function divide(a: number, b: number): number {
      if (b == 0) {
        console.log("Error: Division by zero!");
        return NaN;
      }
      return a / b;
    }

    console.log("Add: 6 + 2 = ", add(6, 3));         // 8 
    console.log("Subtract: 6 - 2 = ", subtract(6, 3)); // 4
    console.log("Multiply: 6 * 2 =", multiply(6, 3)); // 12
    console.log("Divide: 6 / 0 = ", divide(6, 0));     // Error + NaN 
    console.log("Divide: 6 / 2 = ", divide(6, 2));     // 3

    // Temperature Conversion
    function celsiusToFahrenheit(celsius: number): number {
      const fahrenheit = (celsius * 9/5) + 32;
      return parseFloat((fahrenheit).toFixed(2));
    } 

    function fahrenheitToCelsius(fahrenheit: number): number {
      const celsius = (fahrenheit - 32) * 5/9;
      return parseFloat((celsius).toFixed(2));
    }

    console.log("0°C →", celsiusToFahrenheit(0), "°F");     // 32°F 
    console.log("100°C →", celsiusToFahrenheit(100), "°F"); // 212°F 
    console.log("38°C →", celsiusToFahrenheit(38), "°F"); // 212°F 

    console.log("32°F →", fahrenheitToCelsius(32), "°C");   // 0°C 
    console.log("212°F →", fahrenheitToCelsius(212), "°C"); // 100°C 
    console.log("100°F →", fahrenheitToCelsius(100), "°C"); // 100°C 

  }

  title = 'angular-practice';

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

  // Angular Assignment - part 2

}
