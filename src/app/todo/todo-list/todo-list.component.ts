import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent implements OnInit {
  tasks: {title: string, completed: boolean}[] = [];

  newTask = '';

  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    if ( savedTasks ) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if ( this.newTask.trim() ) {
      this.tasks.push({ title: this.newTask.trim(), completed: false })
      this.newTask = '';
      this.saveTask();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTask()
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTask();
  }

  saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
