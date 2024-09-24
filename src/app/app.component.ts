import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { user } from './models/User';
import { signalState } from '@ngrx/signals';
import { userState } from './models/UserState';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-asyncawait-promises';
 

  userService = inject(UserServiceService)

  ngOnInit(){
    this.userService.getUserState();
    this.userService.updateUserAdminStatus(true);
    this.userService.updateUser({username: 'cic2', password:'123456'})
    this.userService.updateUserAndAdminStatus({username: 'cic3', password:'123456'}, false)
  }
}
