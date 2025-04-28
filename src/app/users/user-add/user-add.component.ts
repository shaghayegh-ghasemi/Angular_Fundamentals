import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  newUser = '';

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    if(this.newUser.trim()){
      this.userService.addUser(this.newUser.trim());
      this.newUser = '';
    }
  }

  goBack() {
    this.router.navigate(['/user-list']);
  }
  
}
