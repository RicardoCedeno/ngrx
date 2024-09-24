import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { user } from './models/User';
import { signalState } from '@ngrx/signals';
import { userState } from './models/UserState';
import { UserServiceService } from './services/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-asyncawait-promises';
 

  userService = inject(UserServiceService)
  http = inject(HttpClient)

  ngOnInit(){
    // this.userService.getUserState();
    // this.userService.updateUserAdminStatus(true);
    // this.userService.updateUser({username: 'cic2', password:'123456'})
    // this.userService.updateUserAndAdminStatus({username: 'cic3', password:'123456'}, false)
    this.getData()
    this.getDataAsync();
  }

  constructor(){}


  getData(): void {
    this.http.get('https://dog.ceo/api/breeds/image/random').toPromise()
      .then(response => {
        console.log('no async ',response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      console.log("prueba")
  }

  async getDataAsync(): Promise<void> {
    try {
      const response = await this.http.get('https://dog.ceo/api/breeds/image/random').toPromise();
      console.log('async ', response);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log("prueba")
  }

  

}
