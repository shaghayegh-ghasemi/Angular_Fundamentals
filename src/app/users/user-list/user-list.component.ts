import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private userService: UserService) {}

  get usersObservable() {
    return this.userService.usersObservable;
  }

  deleteUser(index: number){
    this.userService.deleteUser(index)
  }
}
