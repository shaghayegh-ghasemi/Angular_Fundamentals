import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent {
  numbers: number[] = [];
  number!: Observable<number>;
  isStreaming: boolean = false;

  constructor(private dataService: DataService) {}

  start() {
    this.isStreaming = true;
    this.number = this.dataService.getRandomNumber();

    this.number.subscribe(num => {
      this.numbers.push(num);
    })
  }

  stop() {
    this.isStreaming = false;
    this.dataService.stopStream();
  }

  onNumberEmitted(num: number) {
    this.numbers.push(num);
  }

  get average() {
    if (this.numbers.length === 0) return 0;
    const sum = this.numbers.reduce((a, b) => a + b, 0);
    const avg = sum / this.numbers.length;
    // console.log(this.numbers);cls
    this.numbers = [];
    return avg;
  }
}
