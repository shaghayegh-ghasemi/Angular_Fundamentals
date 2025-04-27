import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  newUser = '';

  constructor(private userService: UserService) {}

  addUser() {
    if(this.newUser.trim()){
      this.userService.addUser(this.newUser.trim());
      this.newUser = '';
    }
  }
  
}
