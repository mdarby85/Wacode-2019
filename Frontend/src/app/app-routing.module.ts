import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ManagefundsComponent } from './pages/managefunds/managefunds.component';
import { TransactionhistoryComponent } from './pages/transactionhistory/transactionhistory.component';
import { ManageaccountComponent } from './pages/manageaccount/manageaccount.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // Login page
  {path: 'login', component: LoginComponent},
  // Home page
  {path: 'home', component: HomeComponent},
  {path: 'managefunds', component: ManagefundsComponent},
  {path: 'manageaccount', component: ManageaccountComponent},
  {path: 'transactionhistory', component: TransactionhistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [SignupComponent, HomeComponent, LoginComponent, ManagefundsComponent, ManageaccountComponent, TransactionhistoryComponent];
