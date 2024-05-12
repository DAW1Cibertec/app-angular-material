import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ){
  }
  irPaginaHome(): void{
    this.router.navigate(['home'], {relativeTo: this.route});
  }
  irPaginaEjemplos(): void{
    this.router.navigate(['ejemplos-amaterial'], {relativeTo: this.route});
  }
  irPaginaCurso(): void{
    this.router.navigate(['curso'], {relativeTo: this.route});
  }
  irPaginaPost(): void{
    this.router.navigate(['post'], {relativeTo: this.route});
  }
  cerrarSesion(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
