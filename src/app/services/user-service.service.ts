import { Injectable } from '@angular/core';
import { computed, effect } from '@angular/core';
import { user } from '../models/User';
import { userState } from '../models/UserState';
import { signalState } from '@ngrx/signals';
import { patchState } from '@ngrx/signals';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(){}
  initialUserState = signalState<userState>({
    user: {username: 'cic', password: '123456'} as user,
    isAdmin: false
  })

  userStateStr = computed(() => JSON.stringify(this.initialUserState()));
  
  getUserState(){
    const user = this.initialUserState().user
    const isAdmin = this.initialUserState().isAdmin

    console.log(user)
    console.log(isAdmin)
  }


}
