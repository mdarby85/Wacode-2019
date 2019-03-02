import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // Signup page route
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // Login page
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [SignupComponent, ]
