import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { S2vService } from 'src/app/services/s2v.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("userbox") userbox: ElementRef;
  @ViewChild("passwordbox") passwordbox: ElementRef;
  public hide: boolean;

  constructor(
    private _service: S2vService,
    private _router: Router) {
    this.hide = true;
  }

  ngOnInit(): void {
  }

  login() {
    let user = this.userbox.nativeElement.value;
    let password = this.passwordbox.nativeElement.value;

    this._service.login(user, password).subscribe(res => {
      // console.log(res);
      if (res.auth) {
        localStorage.setItem("token", res.token);
        this._router.navigate(["/"]);
      }
    });
  }

}
