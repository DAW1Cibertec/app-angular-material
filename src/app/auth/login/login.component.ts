import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService){

  }

  autenticacion(usuarioInput: HTMLInputElement,
    passwordInput: HTMLInputElement):void{
      this.authService.login(usuarioInput.value, passwordInput.value);
      this.router.navigateByUrl("/dashboard");
  }

}
