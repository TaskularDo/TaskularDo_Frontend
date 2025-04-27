import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

import {
  HomeComponent,
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
} from './pages';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
