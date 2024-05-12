import { Routes } from '@angular/router';
import { EjemplosAmaterialComponent } from './dashboard/ejemplos-amaterial/ejemplos-amaterial.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursoListaComponent } from './dashboard/cursos/curso-lista/curso-lista.component';
import { PostListaComponent } from './dashboard/posts/post-lista/post-lista.component';
import { CursoDetalleComponent } from './dashboard/cursos/curso-detalle/curso-detalle.component';
import { PostDetalleComponent } from './dashboard/posts/post-detalle/post-detalle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'curso', component: CursoListaComponent},
            {path: 'curso/:id', component: CursoDetalleComponent},
            {path: 'ejemplos-amaterial', component: EjemplosAmaterialComponent},
            {path: 'post', component: PostListaComponent},
            {path: 'post/:id', component: PostDetalleComponent},
        ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
