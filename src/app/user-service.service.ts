import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userid: any;

  constructor() { }

  myUserId(x){
    this.userid=x;
  }
 returnX(){
   return  this.userid;
 }
}
