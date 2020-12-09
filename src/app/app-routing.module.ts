import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: UsersComponent },
  { path: "user/:id", component: UserComponent },
  { path: "intro", component: IntroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
