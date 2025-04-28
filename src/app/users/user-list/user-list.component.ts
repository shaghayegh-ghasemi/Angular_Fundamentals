import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private userService: UserService, private router: Router) {}

  get usersObservable() {
    return this.userService.usersObservable;
  }

  deleteUser(index: number){
    this.userService.deleteUser(index)
  }

  goToAddUser() {
    this.router.navigate(['/user-add'])
  }
}
