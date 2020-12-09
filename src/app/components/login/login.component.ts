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
  public animation: boolean;

  constructor(
    private _service: S2vService,
    private _router: Router) {
    this.hide = true;
    this.animation = true
  }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this._router.navigate(['/']);
    } else {
      setTimeout(this.switchAnimation, 2000);
      setTimeout(() => {
        this.animation = false;
      }, 3800);
    }
  }

  switchAnimation(): void {
    document.querySelector('img').className = "animate__animated animate__fadeOut";
    document.querySelector('p').className = "animate__animated animate__fadeOut";
    document.querySelector(".animation-container-root").classList.add("hide");
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
