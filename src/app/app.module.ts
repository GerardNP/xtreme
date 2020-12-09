import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// IMPORTANT
import { HttpClientModule } from '@angular/common/http';
import { S2vService } from './services/s2v.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { SearchPipe } from './pipes/search.pipe';
// LOGIN
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './components/user/user.component';
// USERS
import { NgxPaginationModule } from 'ngx-pagination';
import { BarComponent } from './components/bar/bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SearchPipe,
    UserComponent,
    BarComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // LOGIN
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    // USERS
    NgxPaginationModule,
    MatProgressSpinnerModule,

  ],
  providers: [S2vService],
  bootstrap: [AppComponent]
})
export class AppModule { }
