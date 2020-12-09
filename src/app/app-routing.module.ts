import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: UsersComponent },
  { path: "user/:id", component: UserComponent },
  // para trabajar en local
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
