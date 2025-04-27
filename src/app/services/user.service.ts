import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<string[]>([]);

  usersObservable = this.users.asObservable(); // retreiving the user lists

  constructor() { }

  addUser(user: string){
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, user]);
  }

  deleteUser(index: number){
    const currentUsers = this.users.value;
    currentUsers.splice(index, 1);
    this.users.next([...currentUsers]);
  }
}
