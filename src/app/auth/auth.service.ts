import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario:string, password:string):void{
    sessionStorage.setItem('isLogged', 'true');    
  }

  logout():void{
    //sessionStorage.removeItem('isLogged')
    sessionStorage.clear()
  }

  isLogged():boolean{
    return !!sessionStorage.getItem('isLogged');
  }

}
