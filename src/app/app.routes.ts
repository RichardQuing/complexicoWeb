import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CursosComponent } from './page/cursos/cursos.component';
import { Component } from '@angular/core';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { CursoComponent } from './page/curso/curso.component';
import { LoginComponent } from './page/login/login.component';
import { permissionsGuard } from './guards/permissions/permissions.guard';
import { CursoFromComponent } from './page/curso-from/curso-from.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'cursos',
        component: CursosComponent,
        ...canActivate(() => redirectUnauthorizedTo(["/login"]))
    },
    {
        path: 'cursos/:id',
        component: CursoComponent,
        canActivate: [permissionsGuard]
    },
    {path: 'curso-from', component: CursoFromComponent},
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component:CursoComponent }, 
    { path: 'login', component:LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
