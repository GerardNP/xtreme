import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  constructor(private _router: Router) { }

  logout() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      this._router.navigate(["/login"]);
    }
  }

  home() {
    this._router.navigate(["/"]);
  }
}
